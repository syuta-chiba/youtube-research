# コールドメール自動化 n8n技術ガイド

> 調査日: 2026-04-20
> 対象: n8nによるコールドメール自動化パイプライン（リスト収集 → メール作成 → 資料生成 → 自動送信 → 返信分類 → 商談予約）

---

## 全体アーキテクチャ（ワークフロー図）

```
[ステップ1: リスト収集]
  Google Maps / LinkedIn / Apollo.io
        |
        v
[ステップ2: データ強化]
  Clearbit / Apollo.io / Firecrawl（企業情報・連絡先補完）
        |
        v
[ステップ3: AIメール生成]
  OpenAI GPT-4 / Claude / Gemini（パーソナライズドメール作成）
        |
        v
[ステップ4: 提案資料の自動生成]
  Google Slides テンプレート置換 / PDF生成（CraftMyPDF / CustomJS）
        |
        v
[ステップ5: 自動送信]
  Gmail Node / SMTP Node（ステップメール・フォローアップ）
        |
        v
[ステップ6: 返信分類・商談予約]
  Gmail Trigger → AI分類 → Calendly / Google Calendar 予約
```

### 推奨ワークフロー分割

| ワークフロー番号 | 名前 | トリガー |
|---|---|---|
| WF-1 | リスト収集＆データ強化 | Schedule Trigger（毎日/毎週） |
| WF-2 | AIメール生成＆資料作成 | Google Sheets 新行追加トリガー |
| WF-3 | メール送信（シーケンス） | Schedule Trigger（毎日AM9時） |
| WF-4 | 返信分類＆商談予約 | Gmail Trigger（受信時） |

---

## ステップ1: リスト収集

### 方法A: Google Maps スクレイピング

**使えるノード・API:**
- **SerpAPI + HTTP Request ノード**: Google Maps検索結果をAPI経由で取得
- **Apify Google Maps Scraper**: Apifyノード経由でビジネス情報（名前、電話、住所、ウェブサイト）を一括取得
- **Outscraper ノード**: n8n内蔵ノードでGoogle Mapsリードを直接スクレイピング
- **Firecrawl ノード**: 取得したウェブサイトからメールアドレスを抽出

**設定方法:**
1. Schedule Triggerで定期実行を設定
2. HTTP Requestノードで SerpAPI（`serpapi.com/search?engine=google_maps&q=キーワード&ll=緯度,経度`）を呼び出し
3. JSONレスポンスから business_name, address, phone, website を抽出
4. Firecrawlノードで各ウェブサイトをスクレイピングし、メールアドレスを抽出
5. Google Sheetsノードで結果を保存

**参考テンプレート:**
- [Google Maps Scraper](https://n8n.io/workflows/2063-google-maps-scraper/)
- [Google Maps Email Scraper（サードパーティAPI不要）](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)
- [Lead Generation: Google Maps to Email Scraper](https://n8n.io/workflows/5385-lead-generation-system-google-maps-to-email-scraper-with-google-sheets-export/)
- [Apify + Firecrawl統合版](https://n8n.io/workflows/4573-google-maps-business-scraper-with-contact-extraction-via-apify-and-firecrawl/)

### 方法B: LinkedIn スクレイピング

**使えるノード・API:**
- **Apify ノード**: LinkedIn Profile Scraperアクターでプロフィール情報を取得
- **Bright Data ノード**: LinkedIn求人リストから採用シグナルを検出
- **PhantomBuster + HTTP Request**: LinkedIn自動化ツールをn8nから呼び出し

**設定方法:**
1. Apifyノードで「LinkedIn Profile Scraper」アクターを指定
2. 検索条件（業種、職種、地域）をパラメータに設定
3. 実行完了待ち → データセット取得 → Google Sheetsに保存

**注意事項:**
- LinkedInの利用規約に準拠する必要がある
- プロフィールの可視性設定により取得できるデータが異なる
- レート制限に注意（1日あたりの取得数を制限する）

**参考テンプレート:**
- [LinkedIn Profiles to Google Sheets with Apify](https://n8n.io/workflows/5618-scrape-linkedin-profiles-and-save-to-google-sheets-with-apify/)
- [LinkedIn Scraper + GPT-4 Outreach](https://n8n.io/workflows/5069-linkedin-profile-scraper-and-personalized-outreach-using-phantombuster-gpt-4/)

### 方法C: Apollo.io API

**使えるノード・API:**
- **HTTP Request ノード**: Apollo.io REST APIを直接呼び出し
- Apollo People Search API: 業種・職種・企業規模でフィルタリング
- Apollo Enrichment API: メールアドレス・電話番号の取得

**設定方法:**
1. HTTP Requestノードで `https://api.apollo.io/v1/mixed_people/search` にPOSTリクエスト
2. ヘッダーに `x-api-key` を設定
3. ボディに検索条件（person_titles, employee_ranges, industry_tag_ids）を指定
4. レスポンスから name, email, company, title を抽出

**参考テンプレート:**
- [Apollo.io Lead Generation & Enrichment](https://n8n.io/workflows/3791-generate-and-enrich-linkedin-leads-with-apolloio-linkedin-api-mailso-and-gpt-35/)
- [Apollo + AI + Instantly.ai Outreach](https://n8n.io/workflows/6983-automate-lead-generation-and-personalized-outreach-with-apollo-ai-and-instantlyai/)
- [Apollo to Airtable CRM](https://n8n.io/workflows/3435-get-qualified-leads-in-one-click-from-apollo-to-airtable/)

---

## ステップ2: データ強化（エンリッチメント）

### Clearbit連携

**ノード:** Clearbitノード（n8n内蔵）

**利用可能なアクション:**
1. **Person Enrichment**: メールアドレスから個人情報（氏名、役職、LinkedIn、写真）を取得
2. **Company Enrichment**: ドメインから企業情報（従業員数、業種、売上規模、所在地）を取得
3. **Company Autocomplete**: 部分的な企業名から正式な企業情報を補完

**設定方法:**
1. Clearbitノードを追加 → Clearbit APIキーで認証
2. リソース: Person / Company を選択
3. 操作: Enrich を選択
4. メールアドレスまたはドメインを入力フィールドにマッピング

### Apollo.io エンリッチメント

**利用可能な情報:**
- 企業のビジネス概要
- リードの最新LinkedInポスト
- 直近の企業ニュースリリース
- 電話番号・メールアドレスの検証

**参考テンプレート:**
- [Apollo Decision-Maker Discovery](https://n8n.io/workflows/3830-discover-and-enrich-decision-makers-with-apollo-and-human-verification/)
- [LinkedIn Lead Enrichment Pipeline with Apollo](https://n8n.io/workflows/8409-automated-linkedin-lead-enrichment-pipeline-using-apolloio-and-google-sheets/)

### Firecrawl ウェブスクレイピング強化

**ノード:** Firecrawlノード（n8n Cloud内蔵）

**利用可能な操作:**
- **Scrape**: 単一URLからコンテンツ抽出（マークダウン/JSON）
- **Crawl**: サイト全体を再帰的にクロール
- **Extract**: AI搭載の構造化データ抽出
- **Map**: ドメイン全体のURL発見

**設定（n8n Cloud）:**
1. ノードパネルからFirecrawlノードをインストール
2. 「Connect to Firecrawl」をクリック → メールを共有
3. 無料Hobbyプラン（100,000クレジット）が自動付与

**用途:** 見込み客のウェブサイトから事業内容・最新ニュース・技術スタックを抽出し、メールのパーソナライズに活用

---

## ステップ3: AIメール生成

### 方法A: OpenAI（GPT-4）でメール生成

**ノード:** OpenAI Chat Model ノード / HTTP Request ノード

**設定方法:**
1. OpenAI Chat Modelノードを追加
2. モデル: `gpt-4o` を選択
3. システムプロンプトに以下を設定:

```
あなたはBtoB営業のコールドメール作成のプロです。
以下のリード情報に基づいて、パーソナライズされたコールドメールを作成してください。

ルール:
- 件名は20文字以内で興味を引くもの
- 本文は3段落以内（150字以内）
- 相手の課題に共感する導入
- 具体的な価値提案
- 明確なCTA（15分の電話提案）
- フォーマルすぎず親しみやすいトーン

出力形式（JSON）:
{
  "subject": "件名",
  "body": "本文（HTML形式）",
  "followup_1": "3日後のフォローアップ本文",
  "followup_2": "7日後のフォローアップ本文"
}
```

4. ユーザーメッセージに `{{ $json.company_name }}`, `{{ $json.person_name }}`, `{{ $json.industry }}` 等をマッピング

### 方法B: Claude（Anthropic）でメール生成

**ノード:** HTTP Request ノード

**設定方法:**
1. HTTP Requestノードを追加
2. メソッド: POST
3. URL: `https://api.anthropic.com/v1/messages`
4. ヘッダー:
   - `x-api-key`: Anthropic APIキー
   - `anthropic-version`: `2023-06-01`
   - `content-type`: `application/json`
5. ボディ: モデルに `claude-sonnet-4-20250514`、system/userメッセージを指定
6. Structured Output Parserで `email`, `subject`, `message` フィールドを強制

### 方法C: Google Gemini でメール生成

**ノード:** Google Gemini Chat Model ノード

**参考テンプレート:**
- [Cold Outreach with Gemini](https://n8n.io/workflows/6089-automate-cold-outreach-with-email-personalization-using-gemini-and-google-sheets/)
- [Gemini + Telegram承認ワークフロー](https://n8n.io/workflows/9267-personalized-cold-email-system-with-google-gemini-telegram-approval-and-google-sheets/)

### アイスブレーカー生成

見込み客のウェブサイトをスクレイピングし、最新のニュースやブログ記事を元にパーソナライズされた導入文を生成する。

**参考テンプレート:**
- [Cold Email Icebreaker with Apify + GPT-4](https://n8n.io/workflows/5388-cold-email-icebreaker-generator-with-apify-gpt-4-and-website-scraping/)

---

## ステップ4: 提案資料の自動生成

### 方法A: Google Slides テンプレート置換

**ノード:** Google Slides ノード（n8n内蔵）

**設定方法:**
1. Google Slidesでマスターテンプレートを作成
   - プレースホルダーを設定: `{{Company}}`, `{{Name}}`, `{{Problem}}`, `{{Solution}}`, `{{ROI}}`
2. n8nワークフローでGoogle Slidesノードを追加
3. テンプレートのプレゼンテーションIDを指定
4. Google Slides APIの `batchUpdate` でテキスト置換リクエストを送信
5. 完成したプレゼンテーションをGoogle Driveに保存 → PDFとしてエクスポート

**参考テンプレート:**
- [Google Slides from CSV for Cold Outreach](https://n8n.io/workflows/3890-create-customized-google-slides-presentations-from-csv-data-for-cold-outreach/)
- [AI-Powered Proposal Automation](https://n8n.io/workflows/5082-ai-powered-proposal-automation-using-google-slides/)
- [Premium Proposal Generator with PandaDoc](https://n8n.io/workflows/4804-ai-premium-proposal-generator-with-openai-google-slides-and-pandadoc/)
- [Client Proposals with OpenAI + Gmail](https://n8n.io/workflows/12211-generate-client-proposals-with-openai-google-sheets-slides-gmail-and-drive/)

### 方法B: PDF直接生成

**選択肢:**

| サービス | ノード | 無料枠 | 特徴 |
|---|---|---|---|
| CustomJS | HTTP Request | 600枚/月 | テンプレートベース、低コスト |
| CraftMyPDF | CraftMyPDFノード（コミュニティ） | 100枚/月 | ドラッグ＆ドロップエディタ |
| APITemplate | HTTP Request | 50枚/月 | HTML/CSSテンプレート対応 |
| Google Docs → PDF | Google Docsノード | 無制限 | 無料だがデザイン自由度低 |

**Google Docs方式の設定:**
1. OpenAIでMarkdownコンテンツを生成
2. Google Docsノードで新規ドキュメント作成 → コンテンツ挿入
3. Google Drive APIでPDFとしてエクスポート
4. メール添付用にバイナリデータとして保持

---

## ステップ5: 自動送信

### 方法A: Gmail ノード

**ノード:** Gmail ノード（n8n内蔵）

**設定方法:**
1. Google Cloud ConsoleでOAuth2認証情報を作成
2. Gmail APIを有効化
3. n8nでGmail認証情報を追加（OAuth2）
4. Gmailノードで以下を設定:
   - To: `{{ $json.email }}`
   - Subject: `{{ $json.subject }}`
   - Message: `{{ $json.body }}`（HTML形式）
   - Attachments: 生成したPDF/プレゼンのバイナリプロパティ

**送信制限:**
- Gmail無料: 500通/日
- Google Workspace: 2,000通/日

### 方法B: SMTP ノード

**ノード:** Send Email ノード（n8n内蔵）

**設定方法:**
1. SMTP認証情報を作成:
   - ホスト: `smtp.<プロバイダ>.com`
   - ポート: 465（SSL/TLS）または 587（STARTTLS）
   - ユーザー名/パスワード（アプリパスワード推奨）
2. Send Emailノードで宛先・件名・本文・添付ファイルを設定

**推奨SMTPプロバイダ:**
- **SendGrid**: 100通/日無料、API連携も可能
- **Mailgun**: 5,000通/月（3ヶ月無料）
- **Amazon SES**: $0.10/1,000通、大量送信向き
- **Brevo (旧Sendinblue)**: 300通/日無料

### メールシーケンス（フォローアップ）の実装

**アーキテクチャ:**
1. Google Sheetsに送信状態を管理（sent_count, last_sent_date, replied フラグ）
2. Schedule Triggerで毎日実行
3. Sheetsから `replied = false` かつ `sent_count < 3` のリードを取得
4. `last_sent_date` からの経過日数を計算
5. 3日間隔でフォローアップメールを送信
6. 送信後、Sheetsの `sent_count` と `last_sent_date` を更新

**参考テンプレート:**
- [Gmail Campaign Sender with Auto Follow-up](https://n8n.io/workflows/2137-gmail-campaign-sender-bulk-send-emails-and-follow-up-automatically-if-no-reply/)
- [Email Blast with Follow-ups & Response Tracking](https://n8n.io/workflows/7175-automated-email-blast-with-follow-ups-and-response-tracking/)
- [Cold Email Sequence with GPT-4 + Mailgun](https://n8n.io/workflows/6402-automate-personalized-cold-email-sequences-with-gpt-4-mailgun-and-supabase/)
- [B2B Cold Email with Auto-Reply Detection](https://n8n.io/workflows/11037-personalized-b2b-cold-email-sequence-with-gpt-4-gmail-auto-reply-detection/)
- [Cost-Free Follow-up with Gmail + Sheets](https://n8n.io/workflows/7856-cost-free-email-follow-up-sequence-with-google-sheets-and-gmail/)

---

## ステップ6: 返信分類・商談予約

### 返信の検知

**方法1: Gmail Trigger ノード**
- 新着メール受信時にワークフローを自動起動
- フィルタ: ラベルやFrom条件で絞り込み

**方法2: Webhook + メール転送**
- 受信メールをWebhook URLに転送（LobsterMail等のサービス利用）
- リアルタイム配信 + リトライロジック対応
- `In-Reply-To`, `References` ヘッダーでスレッドを追跡

**方法3: IMAP Trigger**
- IMAPメールボックスを定期的にチェック
- 任意のメールプロバイダに対応

### AI返信分類

**ノード:** Sentiment Analysis ノード / OpenAI Chat Model ノード

**分類カテゴリの例:**
```json
{
  "categories": [
    "interested",       // 興味あり → 商談予約へ
    "needs_info",       // 詳細希望 → 追加情報送付
    "not_now",          // 今は不要 → 3ヶ月後にリマインダー
    "not_interested",   // 興味なし → リストから除外
    "out_of_office",    // 不在 → 戻り日にリスケ
    "unsubscribe",      // 配信停止 → 即座に除外
    "spam_bounce"       // バウンス → リストから削除
  ]
}
```

**実装方法:**
1. Gmail Triggerで新着返信を検知
2. メール本文をOpenAI/Claudeノードに送信
3. 上記カテゴリに分類（Structured Output Parserで強制）
4. Switchノードでカテゴリ別に処理を分岐
5. Google Sheetsのリードステータスを更新

**参考テンプレート:**
- [Email Classification with Groq AI + Pinecone](https://n8n.io/workflows/6202-automated-email-classification-and-response-system-with-groq-ai-and-pinecone/)
- [Smart Email Classifier & Auto-Responder](https://n8n.io/workflows/3242-smart-email-classifier-and-auto-responder-with-ai/)

### 商談予約の自動化

**方法A: Calendly連携**

**ノード:** Calendly Trigger ノード

**設定方法:**
1. Calendlyアカウントで Personal Access Token を発行
   - Integrations → API & Webhooks → 新規トークン作成
2. n8nでCalendly認証情報を追加
3. 返信分類で「interested」の場合:
   - CalendlyのスケジューリングリンクをAI生成の返信メールに埋め込み
   - `https://calendly.com/あなたのID/30min`
4. Calendly Triggerで予約完了を検知 → CRMを更新

**方法B: Google Calendar 直接予約**

**ノード:** Google Calendar ノード（n8n内蔵）

**設定方法:**
1. Google Calendar APIを有効化 + OAuth2認証
2. カレンダーの空き時間を確認（Freebusy API）
3. 候補日時を返信メールに記載
4. 予約確定時にGoogle Calendarにイベント作成
   - Google Meetリンクの自動生成
   - 参加者への通知メール自動送信

**参考テンプレート:**
- [Complete Booking System with Google Calendar](https://n8n.io/workflows/8635-complete-booking-system-with-google-calendar-business-hours-and-rest-api/)
- [Customer Support + Calendar Booking with GPT](https://n8n.io/workflows/5387-automate-customer-support-and-calendar-bookings-with-openai-gpt-and-google-calendar/)

---

## 必要なAPIキー・アカウント一覧

| サービス | 用途 | 必須/任意 | 取得場所 |
|---|---|---|---|
| **n8n** | ワークフロー実行基盤 | 必須 | n8n.io（Cloud）/ セルフホスト |
| **Google Cloud Console** | Gmail, Sheets, Slides, Calendar, Drive API | 必須 | console.cloud.google.com |
| **OpenAI** | メール生成AI | 必須（いずれか1つ） | platform.openai.com |
| **Anthropic** | メール生成AI（Claude） | 任意（代替） | console.anthropic.com |
| **Google Gemini** | メール生成AI | 任意（代替） | aistudio.google.com |
| **Apollo.io** | リード検索・エンリッチメント | 推奨 | app.apollo.io |
| **Clearbit** | 企業・個人データ強化 | 任意 | clearbit.com |
| **Apify** | ウェブスクレイピング | 推奨 | apify.com |
| **Firecrawl** | ウェブスクレイピング | 任意 | firecrawl.dev |
| **SerpAPI** | Google Maps API | 任意 | serpapi.com |
| **Calendly** | 商談予約 | 推奨 | calendly.com |
| **CraftMyPDF** | PDF資料生成 | 任意 | craftmypdf.com |
| **SendGrid / Mailgun** | 大量メール送信 | 任意 | sendgrid.com / mailgun.com |

---

## 推定コスト（月額）

### 最小構成（月500リード規模）

| 項目 | 月額コスト |
|---|---|
| n8n Cloud（Starterプラン） | $24 |
| OpenAI API（GPT-4o、500通分） | ~$5-10 |
| Apollo.io（無料プラン: 月150クレジット） | $0 |
| Google Workspace（Gmail + Drive + Slides） | $7 |
| Apify（無料枠: $5/月分） | $0-5 |
| Firecrawl（無料Hobbyプラン） | $0 |
| Calendly（無料プラン） | $0 |
| **合計** | **約$36-46/月** |

### 標準構成（月2,000リード規模）

| 項目 | 月額コスト |
|---|---|
| n8n Cloud（Proプラン） | $60 |
| OpenAI API（GPT-4o、2,000通 + フォローアップ） | ~$20-40 |
| Apollo.io（Basicプラン） | $49 |
| Google Workspace（Business Standard） | $14 |
| Apify（Starterプラン） | $49 |
| Clearbit（有料プラン） | ~$99 |
| Calendly（Professionalプラン） | $12 |
| CraftMyPDF（Starterプラン） | $29 |
| **合計** | **約$332-352/月** |

### セルフホスト構成（コスト最小化）

| 項目 | 月額コスト |
|---|---|
| n8n セルフホスト（VPS: Hetzner/DigitalOcean） | $5-10 |
| OpenAI API | $5-40 |
| Apollo.io（無料プラン） | $0 |
| Google個人アカウント | $0 |
| Firecrawl（無料枠） | $0 |
| **合計** | **約$10-50/月** |

---

## つまずきやすいポイントと対策

### 1. メール到達率（デリバラビリティ）の問題

**問題:** コールドメールがスパムフォルダに入る

**対策:**
- **別ドメインを使用**: 本業ドメインからコールドメールを送らない。バン時に全社メールが使えなくなるリスクを回避
- **DNS認証設定（必須）:**
  - SPFレコード: `v=spf1 include:_spf.google.com ~all`
  - DKIMレコード: Google Workspace管理コンソールから生成
  - DMARCレコード: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`
- **ウォームアップ**: 新ドメインは1日5-10通から開始し、4-6週間かけて徐々に増やす
- **1日50通以下**: 1インボックスあたり50通を超えるとスパム判定されやすい
- **バウンス率2%以下、苦情率0.3%以下** を維持

### 2. Google API認証の複雑さ

**問題:** OAuth2設定でつまずく

**対策:**
1. Google Cloud Consoleで新規プロジェクト作成
2. 必要なAPIを全て有効化（Gmail, Sheets, Slides, Calendar, Drive）
3. OAuth同意画面を設定（内部利用 or テスト用外部）
4. OAuth2認証情報を作成（ウェブアプリケーション）
5. リダイレクトURIに n8n のコールバックURLを追加
6. n8nでGoogle OAuth2認証情報を作成し、接続テスト

### 3. レート制限への対応

**問題:** APIコールが制限される

**対策:**
- **Waitノード**を使って処理間に適切な遅延を挿入（2-5秒）
- **SplitInBatches ノード**でバッチ処理（10-50件ずつ）
- Gmail API: 1日あたりの送信制限を考慮したスケジューリング
- Apollo.io: プランに応じたクレジット管理

### 4. データ品質の問題

**問題:** 不正確なメールアドレス、重複リード

**対策:**
- **メールアドレス検証**: メール送信前にバリデーションAPI（ZeroBounce, NeverBounce）でチェック
- **重複排除**: Google Sheetsで `VLOOKUP` またはn8nのIFノードで既存リードと照合
- **データクレンジング**: Functionノードで正規表現によるフォーマット統一

### 5. ワークフロー実行数の管理

**問題:** n8n Cloudの実行数制限を超過

**対策:**
- ポーリング間隔を最適化（5分おき → 15分おき: 実行数1/3に削減）
- 5分おきのポーリングは月8,640実行を消費する点に注意
- 条件分岐で不要な後続処理をスキップ
- 大量処理はセルフホスト版（実行数無制限）を検討

### 6. フォローアップの重複送信

**問題:** 同じリードに何度もメールを送ってしまう

**対策:**
- Google Sheetsに `email_sent_count`, `last_sent_date`, `replied` フラグを管理
- ワークフロー冒頭で「未返信 かつ 送信回数 < 3 かつ 前回送信から3日以上経過」を条件にフィルタリング
- 返信検知時に即座にフォローアップ停止フラグを立てる

### 7. 法的コンプライアンス

**問題:** GDPR / 特定電子メール法への準拠

**対策:**
- メール本文に必ず配信停止リンク（オプトアウト）を含める
- 配信停止リクエストは即座に処理するワークフローを構築
- 送信元の氏名・会社名・住所を明記
- 同意なく個人メールアドレスに送信しない（企業メールのみ対象）
- データ保持ポリシーを明確にし、不要になったデータは削除

---

## 参考リソース・テンプレート集

### 公式テンプレート
- [n8n Workflow Templates](https://n8n.io/workflows/)（テンプレートマーケットプレイス）
- [n8n Documentation](https://docs.n8n.io/)

### コミュニティテンプレート
- [awesome-n8n-templates（GitHub: 280+ テンプレート）](https://github.com/enescingoz/awesome-n8n-templates)
- [n8n-free-templates（GitHub: 200+ テンプレート）](https://github.com/wassupjay/n8n-free-templates)

### テンプレートのインポート方法
1. テンプレートページまたはGitHubからJSONファイルをダウンロード
2. n8nインスタンスを開く
3. File → Import from JSON を選択
4. ダウンロードしたJSONファイルを選択
5. 認証情報を各ノードに設定してテスト実行
