# n8n ワークフロー事例・デモネタ集

> 調査日: 2026-04-20
> 調査ソース: n8n公式テンプレート（9,538件）、n8n Blog、n8n Community、GitHub awesome-n8n-templates（280+）、各種テックブログ・Medium記事等
> WebSearch 21回実施

---

## ワークフロー事例50選（カテゴリ別）

---

### メール系（7件）

1. **AI メール自動分類・ラベリング** — 受信メールをOpenAIで分析し「問い合わせ」「パートナーシップ」「通知」等のラベルを自動付与。受信トレイを自動整理
2. **AI メール要約＆自動返信ドラフト** — IMAP トリガーで新着メールを検知 → RAGで社内ナレッジを参照 → AIが返信案を作成 → Google Docsに保存してレビュー
3. **パーソナライズドメールマーケティング** — Google Sheetsの顧客リストからAI（GPT-3.5/4）が個別にカスタマイズしたプロモーションメールを生成・一斉送信
4. **メール一斉送信 + フォローアップ + 返信トラッキング** — Google Sheetsから毎日コンタクトを読み込み、フォローアップ段階に応じたメールを自動送信。返信をログに記録
5. **フィッシングメール検知** — 受信メールのヘッダ・本文をAIで分析し、フィッシングの疑いがあればSlackに即時アラート
6. **日次財務ニュースダイジェスト配信** — 毎朝スケジュール実行でニュースAPIからデータ取得 → AI要約 → メール配信
7. **請求書メール自動処理** — メール添付のPDF請求書をAIで読み取り、経理システムに自動登録＋承認者に通知

---

### SNS系（7件）

8. **マルチプラットフォームSNS自動投稿** — 1つのコンテンツからX/Twitter、Instagram、LinkedIn、Facebook、TikTok、Threads向けに最適化した投稿をAIで生成・自動投稿
9. **Google Trends連動トレンド投稿** — Google Trendsからトレンドキーワードを取得 → Perplexity AIでリサーチ → LinkedIn投稿を自動生成・公開
10. **Instagram DM自動応答（Manychat連携）** — AIがInstagramのDMに自動応答。商品問い合わせや予約受付を24時間対応
11. **Twitter/X ダイナミックバナー更新** — フォロワー数や最新ツイートの反応に応じてTwitterプロフィールバナーを自動更新
12. **Reddit ダイジェスト自動作成** — 特定サブレディットの人気投稿を定期収集 → AI要約 → Slack/メールに配信
13. **LinkedIn コンテンツマシン** — 毎日AIがLinkedIn投稿を自動生成・スケジュール公開。寝ている間にコンテンツが増える
14. **バーチャルAIインフルエンサー運用** — AI生成画像＋AI生成キャプションで架空のインフルエンサーアカウントの運用を全自動化

---

### コンテンツ制作系（8件）

15. **ブログ記事全自動生成（WordPress連携）** — フォームからトピック入力 → Perplexity AIでリサーチ → GPT-4で記事執筆 → WordPressに自動公開
16. **YouTube動画メタデータ自動生成** — Apifyで動画トランスクリプト取得 → SEO最適化されたタイトル・説明・タグをAIが生成 → スケジュール公開
17. **YouTube Shorts自動変換** — 長尺YouTube動画をAIで分析 → ハイライト部分をShorts化 → メタデータ生成 → 自動アップロード・スケジュール設定
18. **フェイスレスYouTube動画自動制作** — Leonardo AIで画像生成 + Creatomateで動画合成 → 完全自動でYouTube動画を量産
19. **HeyGen アバター動画自動制作** — GPT-4でスクリプト生成 → HeyGenでAIアバター動画作成 → YouTube自動アップロード
20. **UGC広告動画自動生成** — Google Sheetsの商品データからVeo/Sora AIモデルでプロモーション動画を自動生成
21. **AIニュースレター自動作成** — RSS/APIから業界ニュースを収集 → AI要約 → テンプレートに流し込み → メール配信
22. **多言語コンテンツ自動翻訳** — 元記事をAIで複数言語に翻訳 → 各言語版CMSに自動投稿

---

### データ分析・スクレイピング系（6件）

23. **Webスクレイピング → Google Sheets自動保存** — HTTPリクエスト + HTML Extract + データ変換 → Google Sheets/Excelに自動書き出し＋メール通知
24. **AI構造化データ抽出** — ScrapeNinjaでWebページ取得 → AIがJSON形式に構造化 → データベースに格納
25. **競合価格モニタリング** — 定期的に競合サイトの価格をスクレイピング → 変動検知 → Slack通知 + スプレッドシートに記録
26. **Google Maps リード抽出** — 郵便番号×業種カテゴリでGoogle Maps APIから店舗データを自動取得 → Google Sheetsに整理
27. **Upwork案件自動スクレイピング** — 定期的にUpworkの新着案件をスクレイピング → AIが提案書を自動作成 → Google Sheetsに管理
28. **SNSセンチメント分析ダッシュボード** — Twitter/Reddit等のメンションを収集 → AIで感情分析 → Googleスプレッドシートに可視化

---

### 営業・リード系（7件）

29. **LinkedIn求人シグナルからのパーソナライズド営業アウトリーチ**（テンプレ使用数323回で最人気） — LinkedIn求人情報を検知 → AIがパーソナライズしたアプローチメールを生成
30. **AIリードスコアリング** — Google Sheetsの新規リードをGPT-4で分析 → Hot/Warm/Coldに自動分類 → CRMの適切なステージに配置
31. **Google Maps → コールドメール全自動パイプライン** — Apifyで店舗データ取得 → Gemini AIでメールアドレス抽出 → AIがコールドメール生成 → Gmail送信 → ステータス管理
32. **Apollo + Instantly.ai 全自動BDRワークフロー** — Apolloでリード発掘 → AIでパーソナライズ → Instantly.aiでマルチシーケンスキャンペーン実行
33. **デモ予約自動CRM連携** — Calendlyでデモ予約 → CRMに自動登録 → 担当者アサイン → フォローアップリマインダー設定
34. **QuickBooks売上レシート自動作成** — Stripe決済成功 → QuickBooks顧客チェック → 売上レシート自動作成（テンプレ使用数291回）
35. **Shopify注文 → Airtable + Gmail確認メール** — Shopify新規注文 → Airtableに記録 → Gmail確認メール自動送信（テンプレ使用数224回）

---

### カスタマーサポート系（7件）

36. **AIカスタマーサポートエージェント（24時間対応）** — Webチャット/メール/WhatsAppから問い合わせ受信 → ベクトルDBのナレッジベースで回答 → 対応不可は人間にエスカレーション
37. **マルチチャネルサポート統合** — Gmail + Telegram + Webhook を統一的に処理するAIサポートシステム。チャネルを問わず一貫した対応
38. **Slack + Linear チケット自動管理** — Slackのサポートチャンネルの投稿をAIで分類 → Linearにチケット自動作成 → 優先度設定
39. **WhatsApp + GPT-4 商品サポート** — WhatsAppからの問い合わせに対しGPT-4がGoogle Sheetsの商品情報を参照して回答
40. **AIテキスト分類によるサポート自動振り分け** — 問い合わせ内容をAIで分類 → ヘルプ記事への誘導 / 追加情報要求 / 人間対応が必要なものを通知
41. **スマートメールアシスタント（Supabase連携）** — AI + ベクトルDBで文脈を理解した賢いメール返信を自動生成
42. **Asana + WhatsApp チケット自動作成** — WhatsAppから受けた問い合わせをAsanaのタスクとして自動作成 + 顧客に通知

---

### AI エージェント系（8件）

43. **RAGチャットボット（社内ドキュメント検索）** — Google DriveのPDFをベクトルDB（Qdrant/Pinecone）にインデックス → チャットで社内ナレッジを検索・回答
44. **SQL クエリビジュアライザー** — 自然言語の質問 → OpenAIがSQLに変換 → PostgreSQL実行 → QuickChartで可視化
45. **AI会議議事録エージェント** — Recall.aiで会議をリアルタイム文字起こし → OpenAIが要約 + アクションアイテム抽出 → Supabaseに保存
46. **マルチエージェントシステム（サブワークフロー）** — 複数のAIエージェントがそれぞれ専門タスクを担当し、サブワークフローで連携する本格的なマルチエージェント構成
47. **AIワークフロービルダー（自己構築）** — チャットで指示 → AIがn8nワークフローを自動設計・構築・検証・修正するメタワークフロー
48. **MCP サーバー連携** — n8nのMCPサーバー機能でClaude Desktop/Cursorから直接ワークフローを作成・実行・管理
49. **不正検知エージェント** — トランザクションパターンをリアルタイム監視 → AIが異常検知 → アラート + 自動ブロック
50. **Notion ナレッジベースAIアシスタント** — NotionのデータベースをAIエージェントのナレッジベースとして活用。チャットで社内情報を検索

---

## 動画映えするデモワークフローTOP10

> 画面上の動きが分かりやすく、視聴者に「おお！」と思わせるインパクトのあるワークフロー

| 順位 | ワークフロー | 映える理由 |
|------|-------------|-----------|
| 1 | **AIチャットボット（RAG + 社内文書）** | チャットUIで質問→即座に回答が返る様子がライブ感あり。PDFアップロードから検索まで一連の流れが見せやすい |
| 2 | **YouTube Shorts 自動変換** | 長尺動画→Shorts化→自動投稿の変化が視覚的にインパクト大 |
| 3 | **マルチプラットフォームSNS一括投稿** | 1回の操作で7つのSNSに同時投稿される様子が圧巻 |
| 4 | **Google Maps → コールドメール全自動パイプライン** | 地図検索→データ抽出→メール生成→送信まで全自動の流れがドラマチック |
| 5 | **SQL自然言語クエリ + チャート可視化** | 「売上トップ10は？」と聞くだけでグラフが出る驚き |
| 6 | **AI会議議事録エージェント** | 実際の会議→文字起こし→要約→アクションアイテム抽出のビフォーアフターが分かりやすい |
| 7 | **AIメール自動分類 + 返信ドラフト** | 大量の未読メールが一瞬で整理される爽快感 |
| 8 | **MCP サーバー連携（Claude Desktopからワークフロー作成）** | 「Claude に話しかけるだけでn8nワークフローが作られる」という未来感 |
| 9 | **フェイスレスYouTube動画全自動制作** | テキスト入力だけで動画が完成する過程が視覚的に面白い |
| 10 | **Webスクレイピング → スプレッドシート自動保存** | サイトのデータが自動でスプレッドシートに流れ込む様子が初心者にも分かりやすい |

---

## 日本のビジネスに刺さるワークフローTOP10

> 日本企業の業務課題にフィットし、「うちでも使いたい」と思わせるワークフロー

| 順位 | ワークフロー | 日本で刺さる理由 |
|------|-------------|----------------|
| 1 | **請求書メール自動処理 → 経理システム登録** | 日本企業の経理部門は未だにPDF請求書のメール受信→手動入力が多い。インボイス制度対応の文脈でも刺さる |
| 2 | **Slackスレッド → GitHub Issue自動作成** | 日本のIT企業で普及しているSlack。「スレッドの議論がそのままIssueになる」は開発チームに直結（CARTA社の事例あり） |
| 3 | **メール受信 → AI要約 → Slack承認 → 自動返信** | 日本企業特有の「メール文化」の課題を解決。上司承認フローも組み込める |
| 4 | **新入社員オンボーディング自動化** | 人事情報入力 → メール/勤怠/給与システムに一括登録。4月の大量入社時期に特に需要大 |
| 5 | **KPIレポート自動集計・配信** | 月末の部署別売上データを自動集計 → 経営陣にレポート送信。Excel作業の削減 |
| 6 | **Googleフォーム → Notion/スプレッドシート自動転記** | 日本の中小企業でGoogleフォーム利用率が高い。手動コピペの排除 |
| 7 | **定期スケジュール × Slack通知** | 朝会リマインド、週次報告催促、月次締め切り通知など日本企業の「定型連絡」を自動化 |
| 8 | **顧客問い合わせAI自動応答（日本語対応）** | 人手不足の中小企業で24時間対応を実現。日本語での自然な応答がポイント |
| 9 | **営業リードのCRM自動登録 + スコアリング** | 展示会・Webフォームからのリードを自動でSalesforce/HubSpotに登録。営業効率化 |
| 10 | **Googleカレンダー連携リマインダー** | 予定の30分前にSMS/Slackで通知。日本のビジネスパーソンの「予定管理」需要に合致 |

---

## 初心者でも15分で作れるワークフローTOP5

> ノード数が少なく（3-5個）、認証設定が簡単で、すぐに動作確認できるワークフロー

| 順位 | ワークフロー | 構成ノード数 | 必要な外部サービス | 所要時間 |
|------|-------------|-------------|------------------|---------|
| 1 | **スケジュール → RSS取得 → Slack通知** | 3ノード | Slack | 10分 |
| | Schedule Triggerで毎朝実行 → RSSフィードから最新記事取得 → Slackチャンネルに投稿 | | | |
| 2 | **Webhook → JSON変換 → メール送信** | 3ノード | なし（n8n内蔵メール） | 10分 |
| | Webhookで外部からデータ受信 → Setノードでフォーマット → Send Emailで通知 | | | |
| 3 | **Googleフォーム → Google Sheets → Slack通知** | 3ノード | Google, Slack | 15分 |
| | フォーム送信をトリガー → スプレッドシートに自動記録 → Slackに「新しい回答があります」と通知 | | | |
| 4 | **スケジュール → 天気API → Slack通知** | 3ノード | Slack | 10分 |
| | 毎朝8時に実行 → OpenWeatherMap APIで天気取得 → Slackに今日の天気を投稿 | | | |
| 5 | **GitHub Push → Slack通知** | 2ノード | GitHub, Slack | 10分 |
| | GitHub Webhookトリガー → コミット情報をSlackチャンネルに投稿 | | | |

---

## 補足: n8n 2026年の注目トレンド

### MCP（Model Context Protocol）対応
- n8n v2.14.0からMCPサーバー機能搭載（ベータ）
- Claude Desktop / Cursor / Windsurf から自然言語でワークフロー作成・実行・管理が可能
- ワークフローをMCPツールとして外部AIエージェントに公開可能

### マルチエージェント構成
- サブワークフローを使ったマルチエージェントアーキテクチャが主流に
- 15種類のエンタープライズ向けマルチエージェントテンプレートが公開済み

### テンプレート数の爆発的増加
- 公式テンプレート: 9,538件（2026年4月時点）
- うちAI関連: 6,564件（全体の約69%）
- RAGテンプレート: 631件
- リード生成: 642件
- サポート自動化: 795件

### 日本語コミュニティの成長
- Qiita、Zenn、DevelopersIO等で日本語解説記事が増加
- CARTA社など日本企業の導入事例が出始めている

---

## 主要ソース

- [n8n公式テンプレートギャラリー](https://n8n.io/workflows/)
- [n8n公式ブログ - AIエージェント15事例](https://blog.n8n.io/ai-agents-examples/)
- [n8n AIエージェントワークフロー事例（Jotform）](https://www.jotform.com/ai/agents/n8n-ai-agent-workflow-example/)
- [Best n8n Templates 2026（Goodspeed Studio）](https://goodspeed.studio/blog/n8n-templates)
- [n8n MCP サーバー公式ドキュメント](https://docs.n8n.io/advanced-ai/mcp/accessing-n8n-mcp-server/)
- [awesome-n8n-templates（GitHub 280+テンプレート）](https://github.com/enescingoz/awesome-n8n-templates)
- [n8n業務活用事例大全（株式会社グラフ）](https://gruff.co.jp/blog/n8n-business-automation-case-studies)
- [n8n活用方法完全ガイド（ENCODE）](https://en-code.jp/n8n%E6%B4%BB%E7%94%A8%E6%96%B9%E6%B3%95%E5%AE%8C%E5%85%A8%E3%82%AC%E3%82%A4%E3%83%89)
- [Slackスレッド→Issue化ワークフロー（CARTA TECH BLOG）](https://techblog.cartaholdings.co.jp/entry/2026/04/03/120511)
- [n8nマルチエージェントテンプレート15選（n8nlab.io）](https://n8nlab.io/blog/best-n8n-multi-agent-workflow-templates)
- [20 n8n Use Cases（BricksTech）](https://www.brickstech.io/post/n8n-use-cases-business-automation)
- [n8n Enterprise Use Cases 2026（Trigi Digital）](https://trigidigital.com/blog/n8n-enterprise-use-cases-2026/)
- [n8n Web Scraping テンプレート（Firecrawl）](https://www.firecrawl.dev/blog/n8n-web-scraping-workflow-templates)
- [5つのn8n自動化で月$3,200（Medium）](https://medium.com/write-a-catalyst/i-built-5-n8n-automations-that-generate-3-200-month-passively-72e2a3050e17)
- [n8n Webhook チュートリアル（Synta）](https://synta.io/blog/n8n-webhook-node-tutorial)
