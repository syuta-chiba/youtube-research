# MCP・A2A・AIプロトコル特化調査
日付: 2026-04-20

---

## MCP（Model Context Protocol）の全体像

### MCPとは何か
- **開発元**: Anthropic（2024年11月発表）
- **一言で**: AIアプリケーションと外部システムを繋ぐ「USB-Cポート」のようなオープン標準プロトコル
- **技術的には**: JSON-RPCベースのステートフルセッションプロトコル。LLMが外部ツール・リソース・プロンプトを発見・呼び出しできる
- **3つのコアプリミティブ**: Tools（ツール）、Resources（リソース）、Prompts（プロンプト）

### 2026年の爆発的成長
- **SDKダウンロード**: 月間1億1000万回（React が3年かかった水準をMCPは16ヶ月で達成）
- **サーバー数**: 12,630以上のMCPサーバーがPulseMCPに登録（YouTube関連だけで40以上）
- **採用企業**: Anthropic, OpenAI, Google, Microsoft, AWS, Salesforce, Stripe, Cisco, Zed 等
- **MCP Dev Summit**: 2026年4月にニューヨークで開催、約1,200名参加
- **エンタープライズ**: Gartnerは2026年末までに企業アプリの40%にAIエージェントが組み込まれると予測

### MCP vs 従来のAPI
| 項目 | 従来のAPI | MCP |
|------|-----------|-----|
| 設計対象 | 開発者向け | AIエージェント向け |
| 通信方式 | RESTful・エンドポイント固定 | JSON-RPC・動的ケイパビリティ発見 |
| ステート | ステートレス | セッション維持・コンテキスト保持 |
| セキュリティ | APIキー・OAuth | OAuth 2.1標準化（2025〜） |
| 関係性 | 補完的。MCPは既存APIをラップしてAIフレンドリーにする |

### MCP 2026年の主要進展
- **SEP-1865仕様**: MCPアプリ（React UIダッシュボード等）のMCPサーバーからの配信が標準化
- **Desktop Extensions (.dxt)**: パッケージ化されたMCPサーバーをダブルクリックでインストール可能に
- **OAuth 2.1標準化**: HTTPトランスポートにおけるカスタム認証方式やAPIキーを置き換え
- **OWASPガイド**: MCP サーバーのセキュア開発ガイドが公開

---

## A2A（Agent-to-Agent）の全体像

### A2Aとは何か
- **開発元**: Google（2025年4月発表）→ Linux Foundationに寄贈
- **一言で**: AIエージェント同士が自律的に通信・協力するためのオープンプロトコル
- **v1.0**: 2026年初頭にリリース、プロダクション品質に

### 2026年4月のマイルストーン
- **150以上の組織**が支持（1年で達成）
- **Google, Microsoft, AWS**の各クラウドプラットフォームに深く統合
- **複数業界**で本番デプロイメント実績あり
- **IBM Research**もA2Aの研究・教育コンテンツを提供

### MCPとA2Aの関係（補完的）
| | MCP | A2A |
|---|-----|-----|
| 接続方向 | 垂直 (Agent → Tool/Data) | 水平 (Agent ↔ Agent) |
| 比喩 | 「道具箱」へのアクセス | 「チームメイト」との会話 |
| 主な用途 | DB接続、API呼び出し、ファイル操作 | タスク委譲、協調ワークフロー |
| 両方使う場面 | エージェントがMCPで道具を使いつつ、A2Aで他エージェントと連携 |

### 第3のプロトコル: ACP（Agent Communication Protocol）
- **IBMが主導**: ピアツーピアのエージェント間通信
- **HTTP標準に基づく**: JSON-RPCよりシンプル
- **MCPとの違い**: MCPはエージェントをツールに還元するが、ACPはエージェントの自律性を維持
- LlamaIndex のLaurie Vossが「MCP vs ACP vs A2A」比較セッションをYouTubeで公開

---

## 英語圏の主要MCP/A2A動画リスト

### MCP入門・解説
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 1 | MCP Tutorial for Beginners: Connect Claude to Any Tool (2026) | https://www.youtube.com/watch?v=40k3SIwlFVM | 2026年3月17日公開。MCPを「USB-C」に例えた入門 |
| 2 | The Ultimate MCP Crash Course - Build From Scratch | https://www.youtube.com/watch?v=ZoZxQwp1PiM | ゼロからの構築クラッシュコース |
| 3 | MCP Tutorial: Build Your First MCP Server | https://www.youtube.com/watch?v=jLM6n4mdRuA | 初めてのMCPサーバー構築 |
| 4 | MCP Tutorial: Build Your First MCP Server and Client from Scratch | https://www.youtube.com/watch?v=RhTiAOGwbYE | サーバー＆クライアント両方構築（無料ラボ付き） |
| 5 | Understanding MCP From Scratch | https://www.youtube.com/watch?v=CDjjaTALI68 | ゼロから理解するMCP |
| 6 | MCP Crash Course: What Python Developers Need to Know | https://www.youtube.com/watch?v=5xqFjh56AwM | Python開発者向けクラッシュコース |
| 7 | The Model Context Protocol (MCP) - Theo Chu, David Soria Parra, Alex Albert | https://www.youtube.com/watch?v=CQywdSdi5iA | Anthropicの中の人による解説 |
| 8 | The Future of MCP - David Soria Parra, Anthropic | https://www.youtube.com/watch?v=v3Fr2JR47KA | MCP創設者が2026年のビジョンを語る |

### MCP比較・実用
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 9 | MCP vs API: What Every Developer Needs to Know | https://www.youtube.com/watch?v=dwlE7TiDXz4 | MCP vs API 比較 |
| 10 | API vs. MCP comparison | https://www.youtube.com/watch?v=CnHmifb4v8E | API vs MCP の違い |
| 11 | MCP vs API: Simplifying AI Agent Integration | https://www.youtube.com/watch?v=7j1t3UZA1TY | エージェント統合の観点 |
| 12 | The Truth About MCP: Pros, Cons & Real-World Use Cases | https://www.youtube.com/watch?v=VHfXKxmlcTA | MCPの真実：メリット・デメリット・実例 |
| 13 | MCP in action: Real-world case studies | https://www.youtube.com/watch?v=IxshWb2Az5w | 実際のケーススタディ |
| 14 | Top 5 MCP Servers For Vibe Coding In 2026 | https://www.youtube.com/watch?v=jyv3HCiVSD4 | 2026年おすすめMCPサーバー5選 |
| 15 | MCP = Next Big Opportunity? EASIST way to build your own MCP business | https://www.youtube.com/watch?v=fJgFZRGO9AQ | MCPビジネスの始め方 |

### MCP構築チュートリアル
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 16 | Build a Real-world MCP Server with One TypeScript File | https://www.youtube.com/watch?v=kXuRJXEzrE0 | TypeScript 1ファイルで実用MCPサーバー |
| 17 | Claude MCP Tutorial: Give Claude Superpowers in 30 Seconds | https://www.youtube.com/watch?v=Lxznc91wlTk | 30秒でClaudeにMCPを接続 |
| 18 | The Ultimate Claude Code Guide - MCP, Skills & More | https://www.youtube.com/watch?v=uogzSxOw4LU | Claude Code + MCP 総合ガイド |
| 19 | Claude Code + Higgsfield MCP = Content MACHINE | https://www.youtube.com/watch?v=20BDYk-CU_o | MCP活用コンテンツ制作 |
| 20 | MCP - Model Context Protocol End-To-End Course 2025（プレイリスト） | https://www.youtube.com/playlist?list=PL6tW9BrhiPTCDteflzehKS6Cn3a79-iCs | エンドツーエンドコース |
| 21 | MCP for Beginners（Microsoftプレイリスト） | https://www.youtube.com/playlist?list=PLlrxD0HtieHjYfVUpGl_-ai7D6FRBjV-d | Microsoft公式・初心者向けシリーズ |
| 22 | (MCP) Model Context Protocol Tutorials（プレイリスト） | https://www.youtube.com/playlist?list=PLXBVh4y1Y6E3sxwqRH-BE0_UaUJhfWlFgao | チュートリアルまとめ |

### A2A関連
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 23 | MCP vs A2A - Google's Answer to Anthropic's Protocol | https://www.youtube.com/watch?v=vVMlEBMIdKo | 2026年2月1日。MCP vs A2A直接比較 |
| 24 | Introduction to Agent2Agent (A2A) Protocol | https://www.youtube.com/watch?v=Fbr_Solax1w | 2026年2月6日。A2A入門 |
| 25 | What is A2A (Agent to Agent Protocol)? A2A Explained | https://www.youtube.com/watch?v=Sl9EZpE61xA | 2025年4月。A2A基礎解説 |
| 26 | MCP vs ACP vs A2A: Comparing Agent Protocols (Laurie Voss, LlamaIndex) | https://www.youtube.com/watch?v=kqB_xML1SfA | 3プロトコル比較セッション |
| 27 | I tried getting LLMs to work together using ACP | https://www.youtube.com/watch?v=Nzaq2S1EpLY | ACP実践レポート |

### MCP解説（Understanding MCP）
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 28 | Understanding Model Context Protocol | https://www.youtube.com/watch?v=f2Si9ykUiZ4 | MCP理解のための解説 |
| 29 | Claude MCP (Model Context Protocol)（プレイリスト） | https://www.youtube.com/playlist?list=PL2NDx92_iOAEqW4ePKyvk2F_-Yatbx2Tk | Claude + MCP プレイリスト |
| 30 | All You Need to Know About MCP (Krish Naik, 25分) | Class Central経由 | 包括的なMCP解説 |

### DeepLearning.AI コース
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 31 | A2A: The Agent2Agent Protocol（ショートコース） | https://learn.deeplearning.ai/courses/a2a-the-agent2agent-protocol/ | Google Cloud・IBM Research協力。A2Aハンズオン |

---

## 日本語でのカバー状況

### 結論: 「ほぼゼロ」ではないが圧倒的に不足

日本語のMCP/A2A関連YouTubeコンテンツは存在するが、英語圏と比べると量・質ともに大幅に遅れている。

### 発見した日本語YouTube動画
| # | タイトル | URL | 備考 |
|---|---------|-----|------|
| 1 | 【ゆる解説】最近よく聞くMCPって何？何が変わるの？SaaSはなくなるの？ | https://www.youtube.com/watch?v=WaWOV2-IIBg | MCP概要のゆる解説 |
| 2 | DeepWikiが便利なのでMCPサーバーなども含めて解説してみた | https://www.youtube.com/watch?v=QjpXAbw2b90 | MCPサーバー含む解説 |
| 3 | 自作MCPサーバの作り方 〜 Python編 〜 | https://www.youtube.com/watch?v=6bQj2o5Ul8M | 2026年3月19日。Python MCPサーバー構築 |
| 4 | MCPサーバーって便利なのか？色々触ってみて感じたことを解説してみた | https://www.youtube.com/watch?v=LIz-3-T5mpc | 2025年5月。使用感レビュー |
| 5 | A2Aプロトコルハンズオン〜AIエージェント連携システム構築入門〜 | https://www.youtube.com/watch?v=P6ek0Eiw88I | 2025年6月28日。A2Aハンズオン |
| 6 | 【A2A】Agent2Agentプロトコルとは？マルチエージェントシステムの未来を解説 | https://www.youtube.com/watch?v=CkMQm_EnqUc | Google発A2A解説 |
| 7 | Google から驚きの新発表！Agent2Agent（A2A）とは | https://www.youtube.com/watch?v=LfzYi1fjNTM | 2025年4月25日。A2A速報 |

### カバーの空白領域（=チャンス）
- MCP vs API の日本語比較動画 → **ゼロ**
- MCP vs A2A の日本語比較動画 → **ゼロ**
- MCP + A2A 統合アーキテクチャ解説 → **ゼロ**
- MCPサーバーTypeScript構築（日本語） → **ゼロ**
- MCPビジネス活用・収益化 → **ゼロ**
- ACP（Agent Communication Protocol）日本語解説 → **ゼロ**
- MCPセキュリティ（OAuth 2.1）日本語解説 → **ゼロ**
- MCP Dev Summit 2026レポート → **ゼロ**
- MCPマーケットプレイス解説 → **ゼロ**
- エンタープライズMCP導入事例 → **ゼロ**

---

## emperor_ch用のMCP/A2Aシリーズ企画10本

### シリーズ名案: 「AIプロトコル完全攻略」

| # | 動画タイトル | 想定尺 | 差別化ポイント |
|---|-------------|--------|---------------|
| 1 | 【2026年最重要】MCPって何？5分でわかるAIの新常識 | 8-10分 | USB-Cの例えを使いつつ、日本のエンジニアが今すぐ理解すべき理由を明確に。日本語で最もわかりやすいMCP入門を目指す |
| 2 | 【実演】MCPサーバーを30分で作る！Python FastMCP入門 | 15-20分 | 画面収録でゼロからコーディング。天気API接続のMCPサーバーを構築。英語圏で大人気の「Build Your First MCP Server」フォーマット |
| 3 | 【比較】MCP vs 普通のAPI、何が違う？開発者が知るべき5つの違い | 10-12分 | 英語圏にはあるが日本語ではゼロ。ステートレス vs ステートフル、固定エンドポイント vs 動的発見の比較 |
| 4 | 【Google発】A2Aプロトコル完全解説 - AIエージェント同士が会話する時代 | 10-12分 | A2A v1.0、Linux Foundation寄贈、150+組織の採用を日本語で初めて体系的に解説 |
| 5 | 【図解】MCP vs A2A vs ACP - 3つのAIプロトコルを完全比較 | 12-15分 | 日本語で完全にゼロのトピック。垂直（MCP）vs 水平（A2A）の図解が刺さる |
| 6 | 【TypeScript】実用MCPサーバーを1ファイルで構築する方法 | 15-20分 | 英語圏のhit動画「Build a Real-world MCP Server with One TypeScript File」の日本語版。Node.js開発者に訴求 |
| 7 | 【2026年版】おすすめMCPサーバー10選＆マーケットプレイス紹介 | 10-12分 | PulseMCP, MCP Market, LobeHub等のマーケットプレイスを紹介。すぐに使える実用サーバーを厳選 |
| 8 | 【ビジネス活用】MCPで業務を自動化！実際の企業事例5選 | 10-12分 | Stripe, Cisco, Solana等の実例。日本の企業にとってのMCP導入メリット |
| 9 | 【セキュリティ】MCPサーバーのOAuth 2.1認証を実装する | 12-15分 | OWASPガイドに基づくセキュアなMCPサーバー開発。エンタープライズ向け |
| 10 | 【未来予測】2026年後半〜2027年、MCP・A2Aはどうなる？ | 10-12分 | David Soria Parra（MCP創設者）の講演を踏まえた展望。SEP-1865、Desktop Extensions、マルチエージェントオーケストレーション |

### なぜこのシリーズが刺さるか
1. **日本語カバーがほぼゼロ**: 上記10本中、類似の日本語動画が存在するのは#1と#2の部分的なカバーのみ
2. **2026年最大のAIトレンド**: MCPのSDKダウンロードは月1.1億回、A2Aは150+組織が参加
3. **開発者の実需**: エンタープライズの84%がAIエージェント投資を拡大予定
4. **先行者利益**: 日本語のMCP/A2A体系的シリーズは事実上存在しない

---

## MCP入門動画の台本アウトライン（企画#1用）

### タイトル: 「【2026年最重要】MCPって何？5分でわかるAIの新常識」
### 想定尺: 8〜10分

---

#### HOOK（0:00〜0:30）
- 「AIに『この資料を読んで』って言ったのに読めなかった経験、ありませんか？」
- 「MCPを使えば、AIが直接データベースもGitHubもSlackも操作できるようになります」
- 「月1億回以上ダウンロードされている、2026年最もホットなAIプロトコル、MCPを日本語で完全解説します」

#### セクション1: MCPとは何か（0:30〜2:30）
- **USB-Cの比喩**: 昔はスマホごとに充電ケーブルが違った→USB-Cで統一。AIも同じ問題を抱えていた→MCPで統一
- **図解**: LLM（Claude/ChatGPT等） ← MCP → 外部ツール（DB, API, ファイル等）
- **3つのコアプリミティブ**:
  - Tools（ツール）: AIが実行できるアクション（例: メール送信、DB検索）
  - Resources（リソース）: AIが読めるデータ（例: ファイル、DB内容）
  - Prompts（プロンプト）: 再利用可能なテンプレート
- 「Anthropicが2024年11月に発表、わずか16ヶ月で業界標準に」

#### セクション2: なぜMCPが革命的か（2:30〜4:30）
- **Before MCP**: ツールごとにカスタム連携。OpenAI用、Claude用、Gemini用…と3重開発
- **After MCP**: 1つのMCPサーバーを作れば、どのAIからも使える
- **採用状況**: OpenAI, Google, Microsoft, AWS, Salesforceが全て採用済み
- **数字**: 12,630以上のMCPサーバー、月間1.1億SDKダウンロード

#### セクション3: 実際に何ができるか（4:30〜6:30）
- **デモ的な例え**（スクショ or 画面収録）:
  - 「Claudeに『GitHubのissue一覧を見せて』→ MCPが取得して表示」
  - 「Claudeに『このYouTube動画を要約して』→ MCPが字幕を取得して要約」
  - 「Claudeに『Slackの#generalに投稿して』→ MCPが実行」
- **マーケットプレイス紹介**: PulseMCP, MCP Market などで好きなMCPサーバーを探せる

#### セクション4: MCP vs 普通のAPI（6:30〜7:30）
- 表で簡潔に比較（本レポートの表を活用）
- 「MCPは既存のAPIを置き換えるのではなく、ラップしてAIフレンドリーにするもの」
- 「REST APIは開発者向け、MCPはAIエージェント向け」

#### セクション5: 今すぐ始めるには（7:30〜8:30）
- **Claude Desktop**: 設定ファイルを1行追加するだけでMCPサーバーに接続可能
- **2026年の新機能**: Desktop Extensions (.dxt) でダブルクリックインストール
- **学習リソース**: Microsoft「MCP for Beginners」（GitHub）、Anthropic公式コース
- **次回予告**: 「次回はPythonで実際にMCPサーバーを作ります！」

#### エンディング（8:30〜9:00）
- 「MCPは2026年のAI開発で避けて通れない技術です」
- 「このシリーズではMCP・A2A・ACPの全てをカバーしていきます」
- チャンネル登録・高評価のCTA
- コメント欄で「MCPで何を作りたいか」を聞く（エンゲージメント施策）

---

### 参考にすべき英語チャンネル/リソース
- **Microsoft公式**: 「MCP for Beginners」プレイリスト + GitHubカリキュラム（.NET, Java, TS, Python, Rust対応）
- **Anthropic Skilljar**: Introduction to Model Context Protocol（公式コース）
- **DeepLearning.AI**: A2A: The Agent2Agent Protocol（Google Cloud/IBM協力のショートコース）
- **Krish Naik**: 25分のMCP包括解説（Class Central掲載）
- **David Soria Parra**: MCP創設者によるカンファレンス講演

---

### 補足: YouTube AI コンテンツポリシー（2026年）
- YouTubeは2026年にAI生成コンテンツのポリシーを強化
- AI生成・大幅改変コンテンツの明示的開示が必須
- 「AIスロップ」（低品質な大量生産AI動画）の取り締まり強化
- **対策**: 人間のパーソナリティを中心に据え、AIは補助ツールとして活用
- emperor_chの場合: 実際のコーディング画面や解説を中心にすれば問題なし
