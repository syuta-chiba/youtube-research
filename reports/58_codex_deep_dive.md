# OpenAI Codex 深掘り調査
日付: 2026-05-01

---

## Codex 2026年版の全体像

### タイムライン
- **2026年1月**: Codex が ChatGPT 内の自律型コーディングエージェントとしてローンチ（クラウドサンドボックス方式）
- **2026年1月**: JetBrains IDE への公式統合
- **2026年3月4日**: Windows 版デスクトップアプリ公開
- **2026年3月**: ChatGPT・Codex・Atlas ブラウザを統合した「スーパーアプリ」構想を発表
- **2026年4月2日**: 料金体系を「メッセージ単位」から「トークン単位（API 準拠）」へ変更
- **2026年4月16日**: 大型アップデート（Computer Use / インアプリブラウザ / メモリ / 画像生成 / 90以上のプラグイン）
- **2026年4月21日**: Codex Labs（エンタープライズ向けハンズオンワークショップ）開始
- **2026年4月23日**: GPT-5.5 リリース、Codex に統合。週間アクティブ開発者 400万人超

### GPT-5.5 の性能
- Terminal-Bench 2.0: **82.7%**（Claude Code は 65.4%）
- SWE-Bench Pro: **58.6%**（単一パスでの実世界 GitHub Issue 解決率で最高）
- GPT-4.5 以来の完全再トレーニングベースモデル

### Codex スーパーアプリの主要機能
| 機能 | 概要 |
|------|------|
| Computer Use | macOS アプリをバックグラウンドで操作。複数エージェントが並列動作、ユーザーの作業を妨げない |
| インアプリブラウザ | Atlas ベース。コメントモード（ページ上に注釈）、アクティブブラウズモード（ボタンクリック/フォーム入力/ナビゲーション） |
| Chronicle メモリ | スクリーンショットを自動取得→構造化メモリとして Markdown 保存。ユーザーの好みを学習 |
| 画像生成 | gpt-image-1.5 による UI モックアップ・ゲームアセット・プロダクトコンセプト作成 |
| 90+ プラグイン | Gmail, Google Drive/Docs/Sheets, Slack, Notion, Microsoft Suite, Atlassian Rovo, CircleCI, CodeRabbit, GitLab Issues, Neon, Remotion, Render 等 |
| マルチエージェント | 複数の特化エージェントが並列でタスク処理 |
| SSH 接続 | リモート devbox への接続、複数ターミナルタブ |
| 自動化 | 数日にわたる繰り返しタスクの自動実行 |

### 料金体系（2026年4月時点）
| プラン | 月額 | Codex 利用倍率 |
|--------|------|----------------|
| Free | $0 | 制限あり（お試し程度） |
| Go | - | 基本利用可 |
| Plus | $20 | 標準 |
| Pro $100 | $100 | 10x（5月末まで2倍キャンペーン中） |
| Pro $200 | $200 | 20x（恒久） |
| Business | $20/席 | pay-as-you-go 対応 |
| Enterprise | カスタム | pay-as-you-go + Codex Labs |

- 5時間ウィンドウ + 週次ウィンドウの二重制限システム
- API はトークン従量課金

---

## 英語圏の主要レビュー・チュートリアル

### Tier 1: 比較・実戦レビュー動画（最重要）

| 動画タイトル | チャンネル/URL | 内容 |
|-------------|---------------|------|
| **Stop using Claude. Start using Codex?** | Riley Brown / [YouTube](https://www.youtube.com/watch?v=LWx4FGam2aQ) | Claude Code ヘビーユーザーが Codex スーパーアプリを全機能ツアー。vibe coding・knowledge work・browser use・computer use・automations を一つのアプリで完結する姿を提示。Claude の Cowork と Claude Code が別権限で分離している点を弱みとして指摘 |
| **Codex vs Claude Code: which is better and cheaper?** | [YouTube](https://www.youtube.com/watch?v=dYQjixUlj_0) | コスト・品質の直接比較。Express.js リファクタで Codex $15 vs Claude Code $155。ただしブラインドレビューでは Claude Code のコード品質が 67% の割合で上と評価 |
| **Codex vs Claude Code 2.0: A CTO's 9 Part Real-World Test** | [YouTube](https://www.youtube.com/watch?v=jawdcPoZJmI) | CTO 視点で 9 項目の実戦テスト。実務レベルの比較 |
| **Cursor vs Codex vs Claude vs Zed vs Anti-Gravity (I Tested Them All)** | [YouTube](https://www.youtube.com/watch?v=pJylXFAC87A) | 5 ツール一斉比較。ツール選定の判断材料 |
| **Claude Code vs Codex vs Cursor... but OpenCode Wins** | [YouTube](https://www.youtube.com/watch?v=YnCkN94Cp7U) | 3 大ツール比較した上で OpenCode を推す異色レビュー |
| **You Can Run Claude AND Codex Together. Here's How.** | [YouTube](https://www.youtube.com/watch?v=Fu5KIG2Jm1g) | Codex ターミナル内で Claude Code を実行し両方の強みを活かす手法 |

### Tier 2: フルコース・チュートリアル

| 動画タイトル | URL | 内容 |
|-------------|-----|------|
| **Codex Full Course 2026: The NEW Best AI Coding Tool** | [YouTube](https://www.youtube.com/watch?v=KXIdYEdOPys) | GPT-5.5 対応の包括コース |
| **CODEX FULL COURSE: From Zero to Deployed App (2026)** | [YouTube](https://www.youtube.com/watch?v=hoCWD1aI60Y) | ゼロからデプロイまでの実践コース |
| **OpenAI Codex Essentials (freeCodeCamp)** | [freeCodeCamp](https://www.freecodecamp.org/news/openai-codex-essentials-ai-assisted-agentic-development-course/) | Andrew Brown (ExamPro) による 5 時間の無料コース |
| **Learn Codex FAST: Build Real Apps with AI** | [YouTube](https://www.youtube.com/watch?v=baNekEtF9sI) | 初心者向け実アプリ構築チュートリアル |
| **Complete Beginner's Guide to OpenAI's Codex App** | [YouTube](https://www.youtube.com/watch?v=nQFtsehu7h0) | 完全初心者向けウォークスルー |
| **OpenAI Codex in ChatGPT in 5 Minutes** | [YouTube](https://www.youtube.com/watch?v=Kd0QGZMy_tA) | 5 分で概要を掴むショート解説 |

### Tier 3: Tips・ニッチ系

| 動画タイトル | URL | 内容 |
|-------------|-----|------|
| **10 Codex tips I wish I knew sooner** | [YouTube](https://www.youtube.com/watch?v=qlxJgvjxxBU) | 実践 Tips 10 選 |
| **7 Tools That Make Codex 10x More Powerful** | [YouTube](https://www.youtube.com/watch?v=SNAlFLV9MBE) | Codex と組み合わせるべき外部ツール |
| **3 AI Agents, 1 Terminal: Setting Up Claude, Gemini & Codex** | [YouTube](https://www.youtube.com/watch?v=-5DPCDRHmKI) | 3 エージェント共存セットアップ |
| **How OpenAI's New Codex Pricing Turns Into a Billing Trap** | [YouTube](https://www.youtube.com/watch?v=IYxn4VyG0Fc) | 料金の落とし穴解説 |
| **Codex Just Replaced 1,000 Hours of Video Editing Tutorials** | [YouTube](https://www.youtube.com/watch?v=Xdy1vkhSz-M) | コーディング以外の活用（動画編集） |
| **Why I Stopped Using Cursor in 2026** | [YouTube](https://www.youtube.com/watch?v=5ZEv4f1I4Ec) | Cursor から移行した理由 |
| **Codex vs Claude Code: I Tested OpenAI's New Codex App** | [YouTube](https://www.youtube.com/watch?v=4qIRAtw4Ktg) | 新 Codex App のファーストインプレッション |

### Tier 4: 公式チャンネル

| 動画タイトル | URL |
|-------------|-----|
| **Introducing the Codex app**（公式） | [YouTube](https://www.youtube.com/watch?v=HFM3se4lNiw) |
| **Getting started with Codex**（公式） | [YouTube](https://www.youtube.com/watch?v=px7XlbYgk7I) |
| **Introducing Codex** プレイリスト | [YouTube](https://www.youtube.com/playlist?list=PLOXw6I10VTv-IwPfAPgK9F2YQOcgr1N8s) |
| **Codex Tutorials** プレイリスト | [YouTube](https://www.youtube.com/playlist?list=PLOXw6I10VTv-ZkTjAFQx8P3i4QurANKyG) |

---

## Claude Code / Cursor との比較ポイント

### Codex vs Claude Code

| 項目 | Codex | Claude Code |
|------|-------|-------------|
| アーキテクチャ | クラウドサンドボックス + デスクトップハイブリッド | ローカルファイルシステム直接操作 |
| 実行方式 | 非同期・自律（タスク委任→結果レビュー） | 同期・インタラクティブ（developer-in-the-loop） |
| Terminal-Bench 2.0 | 82.7%（GPT-5.5） | 65.4% |
| SWE-Bench Pro | 58.6% | 同等レンジ |
| コスト効率 | Express.js リファクタ例: $15 | 同タスク: $155 |
| トークン使用量 | 同一ベンチマークで Claude Code の 1/4 | 4x 多いがより徹底的・決定論的 |
| コード品質 | ブラインドレビューで 25% 選好 | ブラインドレビューで 67% 選好 |
| PR 受容率 | 64%（peer-reviewed study） | - |
| Computer Use | macOS 対応済み | Anthropic の Computer Use は別製品 |
| 強み | 並列タスク・コスト効率・非同期ワークフロー | コード品質・文脈理解・インタラクティブ推論 |

**実践的な使い分け（英語圏の共通見解）**:
- Claude Code: 初期の機能開発・アーキテクチャ設計（深い推論・文脈理解が重要な場面）
- Codex: コードレビュー・デバッグ・並列タスク処理（論理的精度・トークン効率が重要な場面）
- 両方同時に使う: Codex ターミナル内で Claude Code を実行するワークフローも登場

### Codex vs Cursor

| 項目 | Codex | Cursor |
|------|-------|--------|
| 形態 | クラウドエージェント + デスクトップアプリ | AI ネイティブ IDE（VS Code ベース） |
| 操作感 | 非同期タスク委任型 | リアルタイム協調型（補完・Composer） |
| 月額 | $20～$200（ChatGPT プラン依存） | $20/月 |
| 最適用途 | 委任可能な定義済みタスク・並列処理（全体の 20%） | アクティブなコーディング・探索・反復（全体の 80%） |
| 位置づけ | 非同期ジュニア開発者 | リアルタイム AI ペアプログラマー |

**英語圏の戦略的アドバイス**: Cursor を基本ツールとして使い、並列化可能なタスクのパイプラインがある場合に Codex を追加

### Codex vs Devin

| 項目 | Codex | Devin |
|------|-------|-------|
| 形態 | 推論ファースト（ChatGPT 内蔵） | インターフェースファースト（専用ブラウザ+ターミナル+プランナー） |
| PR 受容率 | 64% | 49% |
| 料金 | ChatGPT サブスク ($20～) | $2.25/Agent Compute Unit |
| 最適用途 | MVP 構築・スマートな推論が必要な場面 | メンテナンス自動化・fire-and-forget 委任 |

---

## 日本語でのカバー状況

### YouTube 動画（日本語）
| 動画タイトル | URL | 内容 |
|-------------|-----|------|
| **OpenAI Codex CLIがすごい！Claude Codeと比較・インストール方法・便利な設定** | [YouTube](https://www.youtube.com/watch?v=CgiFsRDfshY) | CLI版の導入と Claude Code 比較 |
| **【1時間で速習】Codex完全入門！IDE版・CLI版の使い方と違いを徹底解説** | [YouTube](https://www.youtube.com/watch?v=H5TGzM_PCW4) | 1時間の包括入門（2025年9月投稿） |
| **Codexの基本的な使い方を学ぼう！** | [YouTube](https://www.youtube.com/watch?v=AoN7wbBlMDM) | 基本操作解説 |
| OpenAI Codex アプリ紹介（にゃんた） | [YouTube](https://www.youtube.com/watch?v=mKOLbleaHJU) | アプリ概要・ビジネス活用 |

### ブログ記事（日本語）
- Qiita / Zenn: 「OpenAI Codex デスクトップ完全ガイド — Skills・Plugins・Automationsを使いこなす」（bokuno_log）
- Uravation: 「【2026年最新】Codex使い方完全ガイド｜料金・Claude比較」
- Uravation: 「【2026年最新】OpenAI Codexとは？非エンジニア向け実践ガイド」
- Jicoo: 「【2026年再始動】OpenAI Codexとは？デスクトップアプリ版の特徴と日本での利用方法」
- SHIFT AI TIMES: 「ChatGPTに新機能「Codex」が登場！使い方や料金プランを徹底解説」

### 日本語カバーの現状評価
- **ブログ記事**: 2026年4月のアップデートに追随した記事が複数あり、カバー率はそこそこ高い
- **YouTube**: 2026年4月の大型アップデート（Computer Use / スーパーアプリ化 / GPT-5.5）を深掘りした実践レビュー動画はまだ**ほぼ存在しない**
- **ギャップ**: 英語圏では「Codex vs Claude Code 実戦比較」「スーパーアプリ全機能ツアー」「料金の落とし穴」などが人気だが、日本語 YouTube ではこれらの切り口の動画がない
- **チャンス**: 英語圏の情報を日本語で丁寧に解説する YouTube 動画を出せば、先行者優位を取れる状態

---

## emperor_ch 用の動画企画10個

### 企画1: 「Codex スーパーアプリ完全ガイド｜2026年4月アップデートで何が変わった？」
- **切り口**: 英語圏で Riley Brown が大バズりした「Stop using Claude. Start using Codex?」の日本語版ポジション
- **内容**: Computer Use / インアプリブラウザ / メモリ / 画像生成 / 90+プラグインを実際に操作してデモ
- **差別化**: 日本語でこの全機能を網羅したYouTube動画がまだない
- **想定再生数**: 高（検索需要あり、競合なし）

### 企画2: 「Codex vs Claude Code ガチ対決｜同じタスクで品質・速度・コストを比較」
- **切り口**: 英語圏で最も人気のある比較テーマを日本語で実施
- **内容**: Express.js や React プロジェクトのリファクタリングを両ツールで実行。品質・速度・コストを数値で比較
- **ポイント**: コスト 10 倍差 vs 品質 67% 選好のトレードオフを実証
- **想定再生数**: 非常に高（「vs 比較」は YouTube で最も伸びるフォーマット）

### 企画3: 「Codex の料金、実は罠がある｜5時間制限・週次制限・トークン課金の真実」
- **切り口**: 英語圏の「How Codex Pricing Turns Into a Billing Trap」の日本語版
- **内容**: Free/Plus/Pro の実質的な使用可能量、5時間＋週次の二重制限、API トークン課金の仕組みを解説
- **差別化**: 日本語での料金解説記事はあるが、動画で「罠」を可視化した内容はない

### 企画4: 「Claude Code + Codex 同時使い｜最強ワークフロー構築法」
- **切り口**: 英語圏で話題の「You Can Run Claude AND Codex Together」を実践
- **内容**: Codex ターミナル内で Claude Code を実行し、それぞれの強みを使い分ける具体的ワークフローを紹介
- **差別化**: 「どっちが良いか」ではなく「両方使う」という第三の選択肢を提示

### 企画5: 「Codex vs Cursor vs Claude Code｜2026年 AIコーディングツール三つ巴比較」
- **切り口**: 英語圏で「Cursor vs Codex vs Claude vs Zed」比較動画が大人気
- **内容**: 同一プロジェクトで 3 ツールを使い分け、それぞれの最適用途（Cursor 80%・Codex 20%の法則）を実演
- **差別化**: 日本語での三つ巴比較動画は皆無

### 企画6: 「Codex の Computer Use がヤバい｜Mac アプリを AI が自動操作するデモ」
- **切り口**: 2026年4月の目玉機能「Computer Use」にフォーカス
- **内容**: Codex が macOS アプリをバックグラウンドで操作する様子を実演。Figma、Terminal、ファイルエクスプローラーなどを AI が操作
- **差別化**: Computer Use の実動画デモは英語圏でもまだ少ない

### 企画7: 「非エンジニアでも Codex でアプリが作れる？｜ゼロからデプロイまで」
- **切り口**: 英語圏の「From Zero to Deployed App」コースの日本語エッセンス版
- **内容**: プログラミング未経験者が Codex だけでウェブアプリを作ってデプロイするまでの実況
- **差別化**: 日本語の非エンジニア向け Codex 実践動画はブログ記事止まり

### 企画8: 「Codex の 10 の裏技｜プロが使う設定とプロンプト術」
- **切り口**: 英語圏の「10 Codex tips I wish I knew sooner」+「7 Tools That Make Codex 10x More Powerful」を統合
- **内容**: モデル選択（GPT-5.2-Codex medium vs xhigh）、AGENTS.md の書き方、タスクの分割方法、外部ツール連携
- **差別化**: 日本語での Tips 系動画が存在しない

### 企画9: 「Codex vs Devin｜自律型 AI 開発エージェント頂上決戦」
- **切り口**: エンタープライズ向け自律型エージェント比較
- **内容**: PR 受容率（Codex 64% vs Devin 49%）、料金体系、得意タスクの違いを検証
- **差別化**: Devin との日本語比較動画は皆無。エンジニア視聴者に刺さるテーマ

### 企画10: 「GPT-5.5 × Codex｜最新モデルでコーディング精度はどこまで上がった？」
- **切り口**: 2026年4月23日リリースの GPT-5.5 を Codex で使った実力検証
- **内容**: Terminal-Bench 2.0 で 82.7% を叩き出したモデルの実力を、実際のプロジェクトで検証。以前の GPT-5.3-Codex との比較も
- **差別化**: GPT-5.5 の Codex 上での実践レビューは日本語 YouTube でまだ見当たらない

---

## 補足: エンタープライズ採用事例（動画ネタ素材）
- **Virgin Atlantic**: テストカバレッジ向上・チーム速度改善
- **Ramp**: コードレビュー加速
- **Notion**: 新機能の迅速な構築
- **Cisco**: 大規模リポジトリの理解・推論
- **Rakuten**: インシデントレスポンス
- **NVIDIA**: GPT-5.5 × Codex を自社インフラで活用

## 補足: 主要記事ソース
- [OpenAI 公式: Codex for (almost) everything](https://openai.com/index/codex-for-almost-everything/)
- [OpenAI 公式: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
- [OpenAI 公式: Scaling Codex to enterprises](https://openai.com/index/scaling-codex-to-enterprises-worldwide/)
- [Zack Proser: OpenAI Codex Review 2026](https://zackproser.com/blog/openai-codex-review-2026)
- [XDA Developers: I switched from Claude Code to Codex](https://www.xda-developers.com/ditched-claude-code-for-codex/)
- [MorphLLM: Codex vs Claude Code Benchmarks](https://www.morphllm.com/comparisons/codex-vs-claude-code)
- [Latent.Space: GPT 5.5 and OpenAI Codex Superapp](https://www.latent.space/p/ainews-gpt-55-and-openai-codex-superapp)
- [VentureBeat: OpenAI drastically updates Codex desktop app](https://venturebeat.com/technology/openai-drastically-updates-codex-desktop-app-to-use-all-other-apps-on-your-computer-generate-images-preview-webpages)
- [TechCrunch: OpenAI releases GPT-5.5](https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/)
- [Sequoia Capital: OpenAI Codex Podcast](https://sequoiacap.com/podcast/training-data-openai-codex/)
