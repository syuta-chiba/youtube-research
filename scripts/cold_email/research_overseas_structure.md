# コールドメール自動化 海外動画の構成分析

## 調査概要
n8nを使ったコールドメール自動化に関する海外YouTube動画を、Nate Herk、Nick Saraev、Julian Goldie を中心に調査。各クリエイターの動画構成、使用ツール、ワークフローの流れを分析した。

---

## 動画1: "Using AI & Automation For NEXT LEVEL Cold Outreach (N8N Workflow)" by Nate Herk
- **URL**: https://www.youtube.com/watch?v=T49Ouhb2gF4
- **公開日**: 2025年3月
- **チャンネル登録者数**: 65万人以上

### チャプター構成（推定）
1. イントロ: コールドアウトリーチの問題点と自動化のメリット
2. ワークフロー全体像の紹介（n8nキャンバス画面）
3. リードスクレイピング（Apollo.io / Apify）
4. リードのエンリッチメント（LinkedIn投稿、会社ニュース、Webサイトスクレイピング）
5. AIによるパーソナライゼーション（OpenAI/GPT-4でアイスブレーカー生成）
6. メール送信プラットフォームへの連携（Instantly.ai）
7. デモ実行＆結果確認
8. テンプレートの配布案内（Skoolコミュニティ）

### 使っているツール一覧
- **n8n** (ワークフロー自動化プラットフォーム)
- **Apollo.io** (リードソーシング / B2Bデータベース)
- **Apify** (Webスクレイピング)
- **OpenAI GPT-4** (メール文面生成 / パーソナライゼーション)
- **Instantly.ai** (コールドメール送信プラットフォーム)
- **Airtable** (リードデータ管理)
- **Google Sheets** (データストレージ)

### ワークフローの流れ
```
Apollo.io → リード取得 → Apify でWebサイトスクレイピング
→ GPT-4 でパーソナライズドメール生成 → Instantly.ai でキャンペーン作成・送信
```

---

## 動画2: "How Nate Herk's AI Agent Is Revolutionizing Lead Response Times" by Nate Herk
- **URL**: https://www.youtube.com/watch?v=fnaTZa0-S30
- **内容**: インバウンドリードへのAIエージェント自動返信

### ワークフローの流れ
1. フォーム経由でリード受信
2. Apify Actorsで公開データをスクレイピング（LinkedIn、YouTube、会社Webサイト）
3. OpenAIでパーソナライズドメッセージ生成
4. Human-in-the-Loop（人間承認ステップ）
5. 自動返信メール送信

### 使っているツール
- n8n, Apify, OpenAI, LinkedIn API, Human-in-the-Loop承認フロー

---

## 動画3: "I Deep-Personalized 1000+ Cold Emails Using THIS AI System (FREE TEMPLATE)" by Nick Saraev
- **URL**: https://www.youtube.com/watch?v=oAWe5wFwHlo
- **公開日**: 2025年5月
- **チャンネル登録者数**: 40万人以上
- **n8nテンプレート**: https://n8n.io/workflows/5388-cold-email-icebreaker-generator-with-apify-gpt-4-and-website-scraping/

### チャプター構成（推定）
1. イントロ: 一般的なコールドメールの低い返信率（1-2%）vs このシステム（5-10%）
2. システム全体像の説明
3. Step 1: リードデータの取得（Google Sheets / Apollo）
4. Step 2: Apifyでマルチページスクレイピング（会社Webサイトを複数ページ分析）
5. Step 3: GPT-4でアイスブレーカー生成（高度なプロンプトエンジニアリング）
6. Step 4: 結果をGoogle Sheetsに保存
7. リアルタイムデモ（1000+件の処理）
8. 返信率の実績データ共有（$72K/月のエージェンシー収益）
9. テンプレート配布

### 使っているツール一覧
- **n8n** (ワークフロー自動化)
- **Apify** (Webスクレイピング / マルチページ対応)
- **OpenAI GPT-4** (アイスブレーカー・メール文面生成)
- **Google Sheets** (リードデータ管理・結果保存)

### ワークフローの流れ
```
Google Sheets(リードリスト）→ Apify（Webサイトスクレイピング / 複数ページ）
→ OpenAI（ウェブサイト分析サマリー生成）→ OpenAI（アイスブレーカー + イントロ + 価値提案生成）
→ Google Sheets に結果保存
```

### Nick Saraev独自の特徴
- **マルチページスクレイピング**: 1ページだけでなく複数ページを分析して深い理解を得る
- **高度なプロンプト設計**: icebreaker / intro / value proposition の3パーツに分けて生成
- **バッチ処理**: 数百件のプロスペクトをインテリジェントなバッチ処理とエラーハンドリングで処理
- **実データの共有**: 実際の返信率やビジネス成果を公開

---

## 動画4: "The 4-Step Cold Email Copywriting System I Used To Make $150K Last Year" by Nick Saraev
- **URL**: https://www.youtube.com/watch?v=v9f87-aHbzE

### 構成
1. コールドメールのコピーライティング4ステップフレームワーク
2. 実際のメール例を分析
3. 各ステップの詳細解説（パーソナライゼーション、提案、CTA）
4. $150Kの実績を生んだテンプレート公開

---

## 動画5: "Live Example of a Winning AI Agency Cold Email Campaign" by Nick Saraev
- **URL**: https://www.youtube.com/watch?v=obMhNfJjIrk
- **公開日**: 2025年4月

### 構成
1. 実際のコールドメールキャンペーンをライブで公開
2. AIエージェンシーのクライアント獲得戦略
3. キャンペーンの設定と結果の分析

---

## 動画6: "N8N FULL COURSE 5 HOURS (Build & Automate Anything)" by Julian Goldie
- **URL**: https://www.youtube.com/watch?v=7WsbtZwOx_U
- **公開日**: 2025年

### コールドメール関連セクション（5時間コースの一部）
- n8nの基本操作
- AIエージェント構築（Gemini、DeepSeek、ChatGPT連携）
- リードスクレイピング（Apify + Google Maps）
- コールドメール自動送信
- フィードバックループ、Human Approval Loop

### 使っているツール
- n8n, Apify, Google Maps Scraper, OpenAI/Gemini/DeepSeek, Google Sheets

---

## 動画7: "Cold Email Outreach with Instantly & N8N" by Julian Goldie
- **URL**: https://www.youtube.com/watch?v=Ifk4oFiVjiM
- **公開日**: 2025年8月

### ワークフローの流れ（推定）
```
N8N → Apifyでリードスクレイピング → Google Sheetsに保存
→ AIでパーソナライズ → Instantly.aiにアップロード → キャンペーン自動実行
```

### Julian Goldie独自のアプローチ
- **$0.41メソッド**: 極めて低コストでリード生成（N8N + Apifyの無料枠活用）
- **Google Maps + Instagram + Facebook**: 複数プラットフォームからのスクレイピング
- **1000+テンプレート**: コピー&ペーストで使えるn8nテンプレート集を配布

---

## 動画8: "The AI Workflow That Gets Me 37.4% Cold Email Replies (n8n)"
- **URL**: https://www.youtube.com/watch?v=LHTiS6hSLso
- **公開日**: 2025年2月

### 注目ポイント
- 37.4%という驚異的な返信率を主張
- n8nワークフローのテンプレート提供
- Skoolコミュニティ経由でアクセス

---

## 動画9: "Complete Cold Outreach AI Agent System (n8n)" - YouTubeプレイリスト
- **URL**: https://www.youtube.com/playlist?list=PLpjXm2q8Fo9d5BSi-0LJXHOTT_h-MVIKX

### 構成（シリーズ全体）
- ステップバイステップのコールドアウトリーチAIエージェント構築
- 各動画がワークフローの特定ステップに対応
- 関連動画: "AI Email Agent: Send 500 Personalized Cold Emails FREE (n8n Tutorial)"
- 関連動画: "This AI Agent Create Unbeatable Cold Outreach Personalization (n8n)"

---

## 動画10: "Smartleads + n8n Tutorial | Automate Cold Emails, Lead Follow-ups, and Personalization with AI"
- **URL**: https://www.youtube.com/watch?v=j_QpRhoe0dQ
- **公開日**: 2025年7月

### ワークフロー
```
Smartlead → n8n連携 → AIパーソナライゼーション → 自動フォローアップ
```

---

## 動画11: "Cold Email on Autopilot: Scale Outreach with Instantly, Smartlead & n8n"
- **URL**: https://www.youtube.com/watch?v=7pf3qJffLEQ
- **公開日**: 2025年3月

### ツール構成
- Instantly.ai + Smartlead + n8n の3つを組み合わせたスケーラブルなシステム

---

## 動画12: "How to Scrape UNLIMITED Leads on Google Maps with N8N & Apify"
- **URL**: https://www.youtube.com/watch?v=M3MKLvQ-rMQ

### ワークフロー
```
Apify Google Maps Scraper → n8n → ビジネス情報取得（名前、電話、Web、メール）
→ GPT-4で要約生成 → Google Sheets / Airtable に保存
```

---

## 動画13: "The Ultimate n8n LinkedIn Scraper + Cold Outreach Automation"
- **URL**: https://www.youtube.com/watch?v=94orbpFSqxo

### ワークフロー
```
LinkedIn → PhantomBuster or Apify でプロフィールスクレイピング
→ GPT-4でAI分析・パーソナライゼーション → Google Sheets → メール送信
```

---

# 全動画に共通する構成パターン

## 1. 典型的な動画構成（タイムライン）
```
[00:00] フック: 衝撃的な数字（返信率37%、$72K/月など）
[01:00] 問題提起: 手動コールドメールの限界、低い返信率
[02:00] 解決策の全体像: n8nワークフロー画面を見せる
[05:00] Step 1: リードスクレイピング（Apollo / Google Maps / LinkedIn）
[10:00] Step 2: データエンリッチメント（Webサイトスクレイピング）
[15:00] Step 3: AIパーソナライゼーション（GPT-4でメール生成）
[20:00] Step 4: メール送信プラットフォーム連携（Instantly / Smartlead）
[25:00] デモ実行 & 結果確認
[28:00] テンプレート配布（無料 / コミュニティ参加で取得）
[30:00] CTA: チャンネル登録、コミュニティ参加
```

## 2. 全動画で共通する4ステップフレームワーク
```
Step 1: リード取得（Lead Scraping / Sourcing）
    └→ Apollo.io / Google Maps / LinkedIn / Apify
    
Step 2: リードエンリッチメント（Data Enrichment）
    └→ Webサイトスクレイピング / SNS情報取得 / メール検証
    
Step 3: AIパーソナライゼーション（AI-Powered Personalization）
    └→ GPT-4 / Gemini でアイスブレーカー＆メール本文生成
    
Step 4: メール配信（Email Sending / Campaign Launch）
    └→ Instantly.ai / Smartlead / Gmail SMTP
```

## 3. 共通する演出パターン
- **衝撃的な数字をフックに使う**: 返信率37.4%、$72K/月、10,000通のパーソナライズメールなど
- **n8nのキャンバス画面を早い段階で見せる**: ビジュアルで「こんなシステムが作れる」と示す
- **無料テンプレート配布**: 視聴者をSkool / Gumroad / コミュニティに誘導するリードマグネット
- **ライブデモ**: 実際にワークフローを動かして結果を見せる
- **実績データの公開**: 実際のビジネス成果（収益、返信率）を数字で示す

---

# 使われているツール・APIの一覧

## コア自動化プラットフォーム
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **n8n** | ワークフロー自動化（全動画で中心的） | 全動画 |

## リードソーシング
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **Apollo.io** | B2Bリードデータベース、意思決定者検索 | 高 |
| **Apify** | Webスクレイピング（Google Maps、LinkedIn等） | 非常に高 |
| **Google Maps Scraper** | ローカルビジネスのリード取得 | 中 |
| **PhantomBuster** | LinkedIn プロフィールスクレイピング | 中 |
| **Bright Data** | LinkedIn ジョブリスティングスクレイピング | 低 |
| **Hunter.io** | メールアドレス検索 | 低 |

## AI / LLM
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **OpenAI GPT-4 / GPT-4o** | メール文面生成、ウェブサイト分析 | 非常に高 |
| **Google Gemini** | メール生成（低コスト代替） | 中 |
| **DeepSeek** | メール生成（低コスト代替） | 低 |
| **Claude** | テキスト分析 | 低 |

## メール送信プラットフォーム
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **Instantly.ai** | コールドメール大量送信、シーケンス管理 | 非常に高 |
| **Smartlead** | コールドメール送信、フォローアップ自動化 | 高 |
| **Gmail / SMTP** | 直接メール送信 | 中 |
| **Mailgun** | トランザクションメール | 低 |

## データ管理
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **Google Sheets** | リードデータ保存、ステータス追跡 | 非常に高 |
| **Airtable** | リードデータベース管理（高機能版） | 高 |
| **Supabase** | データベース（PostgreSQL） | 低 |

## メール検証
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **ZeroBounce** | メールアドレス検証 | 中 |
| **Anymailfinder** | メール検索・検証 | 低 |

## その他
| ツール | 用途 | 出現頻度 |
|--------|------|----------|
| **Telegram** | 承認フロー（Human-in-the-Loop） | 中 |
| **Slack** | 通知 | 低 |
| **PandaDoc** | 提案書生成 | 低 |
| **Firecrawl** | Webサイトクロール | 低 |
| **Jina.ai** | Webサイト分析 | 低 |

---

# emperor_chが真似すべき構成要素

## 1. 動画構成の鉄板パターン
- **フック（最初の15秒）**: 衝撃的な数字を出す（例: 「たった1つのn8nワークフローで月100万円の売上を自動化した」）
- **問題提起（1-2分）**: 手動作業の限界を視聴者に共感させる
- **全体像の提示（2-3分）**: n8nキャンバスのビジュアルを見せて「今日作るもの」を示す
- **ステップバイステップ構築（15-20分）**: 各ノードを1つずつ追加しながら解説
- **ライブデモ（3-5分）**: 実際に動かして結果を見せる
- **テンプレート配布 & CTA**: 無料テンプレートでリスト構築

## 2. 特に日本語で差別化できるポイント
- **日本市場向けのリードソース**: Google Maps日本版、LinkedIn日本ユーザー向け
- **日本語メールのパーソナライゼーション**: 日本語特有の敬語・ビジネスマナーをAIに組み込む
- **日本のメール配信ツール連携**: 日本市場で使われるツールとの連携
- **法的考慮事項**: 特定電子メール法への準拠方法を解説（海外動画にはない観点）

## 3. 真似すべきワークフロー構成
```
推奨する動画構成:

動画1: リードスクレイピング編（Google Maps + Apify + n8n）
動画2: AIパーソナライゼーション編（GPT-4/Claude でメール生成）
動画3: メール配信自動化編（Instantly.ai 連携）
動画4: 全体統合編（End-to-Endのフルワークフロー）
動画5: 結果分析・改善編（A/Bテスト、返信率の改善方法）
```

## 4. 必ず入れるべき要素
- [ ] n8nのワークフロー画面をメインビジュアルにする
- [ ] 無料テンプレートを配布する（リードマグネットとして）
- [ ] 実際の数字（メール送信数、返信率、獲得クライアント数）を見せる
- [ ] 各ステップを分かりやすく番号付けする
- [ ] コスト情報を明示する（月額いくらで運用できるか）

## 5. 参考にすべきクリエイターの優先順位
1. **Nick Saraev** - コールドメールに最も特化。ワークフローの技術的詳細が充実。プロンプトエンジニアリングが秀逸
2. **Nate Herk** - n8n全般の教育コンテンツが充実。説明が分かりやすい。コミュニティ構築が上手い
3. **Julian Goldie** - SEO/リンクビルディング視点からのコールドメール活用。大量テンプレート配布戦略

## 6. 最も再現しやすいワークフロー（初心者向け）
```
Google Sheets（リードリスト）
  ↓
n8n（Cronトリガー / 数分おき）
  ↓
Google Sheets Node（1行ずつ取得）
  ↓
OpenAI Node（会社名・業種からパーソナライズメール生成）
  ↓
Gmail Node（メール送信）
  ↓
Wait Node（ランダム遅延 / スパム回避）
  ↓
ループで次の行へ
```

## 7. 上級者向けフルスタックワークフロー
```
Apollo.io / Apify Google Maps Scraper
  ↓
n8n → Airtable（リードDB）
  ↓
Apify Website Scraper（会社Webサイトを複数ページ分析）
  ↓
OpenAI GPT-4（ウェブサイト分析 → サマリー生成）
  ↓
OpenAI GPT-4（アイスブレーカー + イントロ + 価値提案 生成）
  ↓
ZeroBounce（メールアドレス検証）
  ↓
Instantly.ai / Smartlead（キャンペーン作成・自動送信・フォローアップ）
  ↓
Telegram / Slack（返信通知）
```

---

# 調査で使用したソース

## Nate Herk
- YouTube: https://www.youtube.com/@nateherk/videos
- Website: https://www.nateherk.com/
- Apifyインタビュー: https://blog.apify.com/from-bi-to-ai/

## Nick Saraev
- YouTube: https://www.youtube.com/@nicksaraev
- n8n Creator: https://n8n.io/creators/nicksaraev/
- Website: https://nicksaraev.com/
- コールドメールテンプレート: https://n8n.io/workflows/5388-cold-email-icebreaker-generator-with-apify-gpt-4-and-website-scraping/

## Julian Goldie
- YouTube: https://www.youtube.com/channel/UCGpsgNbzdF7BECCVbB1COHw
- Medium: https://medium.com/@julian.goldie

## n8nワークフローテンプレート
- Apollo連携: https://n8n.io/workflows/6983-automate-lead-generation-and-personalized-outreach-with-apollo-ai-and-instantlyai/
- Google Maps: https://n8n.io/workflows/6091-google-maps-lead-scraper-and-enrichment-with-ai-powered-personalized-outreach/
- LinkedIn: https://n8n.io/workflows/5069-linkedin-profile-scraper-and-personalized-outreach-using-phantombuster-gpt-4/
- 4段階フォローアップ: https://n8n.io/workflows/9108-automated-4-stage-email-follow-up-system-with-ai-personalization-and-database-tracking/
- B2Bシーケンス: https://n8n.io/workflows/11037-personalized-b2b-cold-email-sequence-with-gpt-4-gmail-auto-reply-detection/
