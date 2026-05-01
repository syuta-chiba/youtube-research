# AI自動化ツール（n8n/Dify/Make）深掘り調査
日付: 2026-05-01

---

## 各ツールの概要と比較

### n8n（エヌエイトエヌ）
- **種類**: オープンソース・ワークフロー自動化プラットフォーム
- **特徴**: セルフホスト可能、400+インテグレーション、AIネイティブ対応
- **課金**: ワークフロー実行単位（複雑なマルチステップに有利）
- **AI機能**: 2025-2026年でAI自動化に関して最も先行。Claude/OpenAI/Ollamaとのネイティブ統合、MCPサーバー対応
- **セルフホスト**: Docker Compose一発でローカルAI環境構築可能（Self-hosted AI Starter Kit）
- **コミュニティ**: YouTube上で爆発的に成長中。Nate Herkが9ヶ月で0→23万登録者
- **公式チャンネル**: https://www.youtube.com/c/n8n-io

### Dify（ディフィ）
- **種類**: オープンソースLLMアプリ開発プラットフォーム
- **特徴**: ビジュアル・ノーコード/ローコード、RAGパイプライン、エージェント機能
- **GitHub Stars**: 50K+
- **強み**: チャットボット・AIエージェント・Q&Aシステム構築に特化
- **対応LLM**: OpenAI、Anthropic、Azure OpenAI等
- **日本語対応**: 公式が日本語完全対応、Dify Japan公式アカウントあり
- **公式チャンネル**: https://www.youtube.com/@dify_ai

### Make.com（旧Integromat）
- **種類**: クラウドベース・自動化プラットフォーム
- **特徴**: 1,500+アプリ連携、ポリッシュされたUI、初心者向け
- **課金**: オペレーション単位（シンプルな自動化に有利）
- **ユーザー**: 350,000+
- **AI機能**: 2026年にAIエージェント機能追加（有料プラン向け）
- **制限**: セルフホスト不可、クラウドのみ

### Zapier
- **種類**: クラウドベース・自動化プラットフォーム（最大手）
- **規模**: 数億ドルARR、800人規模、社内AIエージェント数>従業員数
- **AI機能**: AI by Zapierで主要LLM（OpenAI、Anthropic等）と連携
- **特徴**: 最も簡単だが最も高価、エンタープライズ向け

### Flowise AI
- **種類**: オープンソース・ローコードAIエージェントビルダー
- **特徴**: ドラッグ&ドロップでRAG・チャットボット・マルチステップLLMワークフロー構築
- **買収**: 2025年8月にWorkdayが買収
- **公式チャンネル**: https://www.youtube.com/@FlowiseAI

### Langflow
- **種類**: ローコードAIアプリビルダー
- **特徴**: マルチエージェントAI、プロンプティング、RAG対応
- **最新版**: v1.9（Langflow Assistant、MCP対応）
- **公式チャンネル**: https://www.youtube.com/@Langflow

### ツール比較まとめ

| 項目 | n8n | Dify | Make.com | Zapier | Flowise |
|------|-----|------|----------|--------|---------|
| AI特化度 | ★★★★★ | ★★★★★ | ★★★☆☆ | ★★★☆☆ | ★★★★☆ |
| セルフホスト | ○ | ○ | × | × | ○ |
| ノーコード度 | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★☆ |
| 連携アプリ数 | 400+ | 中程度 | 1,500+ | 最多 | 少なめ |
| コスト | 低〜中 | 無料〜 | 中 | 高 | 無料〜 |
| 日本語情報 | 少ない | やや多い | 少ない | やや多い | ほぼ無 |
| YouTube英語動画 | 非常に多い | 多い | 多い | 多い | 中程度 |

---

## 英語圏の主要チュートリアル動画リスト

### n8n チュートリアル（2025-2026）

1. **"n8n Quick Start Tutorial: Build Your First AI Agent [2026]"** - ワークフローテンプレート付き入門（2026年2月）
   - https://www.youtube.com/watch?v=GuaKeDS6UKU

2. **"n8n Tutorial for Beginners 2026: How to Build AI Agents"** - セルフホスト＋AIエージェント構築
   - https://www.youtube.com/watch?v=TKnaDGpN7Ns

3. **"N8N FULL COURSE 6 HOURS (Build & Sell AI Automations + Agents)"** - 6時間フルコース
   - https://www.youtube.com/watch?v=2GZ2SNXWK-c

4. **"n8n Tutorial for 2026: How To Build AI Agents for FREE"** - 無料でAIエージェント構築（2026年1月）
   - https://www.youtube.com/watch?v=Pqp4qJ5sS5g

5. **"How to Use n8n in 2026 | First Day Setup + Simple Workflow"** - 初日セットアップ
   - https://www.youtube.com/watch?v=d-zBtfQT42k

6. **"How to Build AI Agents in n8n for Beginners! (Full n8n Guide)"** - 初心者向け完全ガイド
   - https://www.youtube.com/watch?v=kEtYJOijCBM

7. **"8 Insane AI Agent Use Cases in N8N!"** - 8つのユースケース
   - https://www.youtube.com/watch?v=ZXtVvroop_U

8. **"35 Best n8n Use Cases You'll Use Daily (Free Templates)"** - 35のユースケース＋無料テンプレ
   - https://www.youtube.com/watch?v=Yw71-CzeoQI

9. **"The Only 12 n8n AI Automations You'll Ever Need"** - 厳選12自動化
   - https://www.youtube.com/watch?v=uQGT2K26W84

10. **"How to Self-Host n8n in 3 minutes (Beginners Guide)"** - 3分セルフホスト
    - https://www.youtube.com/watch?v=2lpszFNsb-8

### n8n + Claude/MCP 関連

11. **"Claude Code + n8n | Complete Beginners Guide"** (2026年3月)
    - https://www.youtube.com/watch?v=lGLwLOERp6c

12. **"Claude 4 in n8n Is a Game Changer - Full Setup Tutorial"**
    - https://www.youtube.com/watch?v=oMwFD39uPN4

13. **"How to Connect the NEW n8n MCP to Claude in 2 Minutes!"**
    - https://www.youtube.com/watch?v=oXahetdOf4E

14. **"Setting Up The NEW n8n MCP Nodes Step-by-Step + Claude Desktop Integration"**
    - https://www.youtube.com/watch?v=7rUAk6aIarQ

15. **"Turn n8n workflow into MCP Server"** (2026年2月)
    - https://www.youtube.com/watch?v=j-nst94_amw

16. **"Build Anything with MCP in n8n, Here's How!"**
    - https://www.youtube.com/watch?v=Hs89msXJiIc

### n8n + OpenAI 関連

17. **"Automate Your Content with AI | n8n and OpenAI Tutorial"**
    - https://www.youtube.com/watch?v=OlmOsrvvs5U

18. **"Chat with your Documents | n8n & OpenAI Tutorial"**
    - https://www.youtube.com/watch?v=3THHztcM1YY

19. **"Run OpenAI's Open Source Model FREE in n8n"**
    - https://www.youtube.com/watch?v=UaYiMyimlmg

20. **"How To Build a Startup Team of AI Agents (n8n, OpenAI, FeedHive)"**
    - https://www.youtube.com/watch?v=Hm0DZtiKUI8

### Dify チュートリアル

21. **"Master Dify AI in 1 Hour: Complete Beginner's Guide for 2026"** (2026年1月)
    - https://www.youtube.com/watch?v=f-rvwoywUgM

22. **"Dify AI Tutorial: How To Use Dify AI to Build Apps (Beginner Guide 2026)"** (2026年2月)
    - https://www.youtube.com/watch?v=ITgXgTi24Hs

23. **"Dify Quickstart Guide: Build Your First AI Workflow"**
    - https://www.youtube.com/watch?v=dJ34OU_JY7Y

24. **"Build an AI Chatbot using Dify AI and Streamlit"**
    - https://www.youtube.com/watch?v=BMyssB9z_gM

25. **"How to Build AI Chatbots & Chatflow Automation with Dify.ai"**
    - https://www.youtube.com/watch?v=idT2Igu8X2w

### Dify vs n8n 比較動画

26. **"Dify Vs n8n: Which Is Best In 2025?"**
    - https://www.youtube.com/watch?v=VF-z508soMQ

27. **"N8n Vs Dify || Which Is Better?"**
    - https://www.youtube.com/watch?v=j-WTkF_8Cro

28. **"Dify vs n8n - Full Comparison for 2025 (AI + Workflows)"**
    - https://www.youtube.com/watch?v=hUJ0Bu-k7ag

### Flowise / Langflow チュートリアル

29. **"Flowise v3 Complete Tutorial: Build AI Agents WITHOUT Coding"**
    - https://www.youtube.com/watch?v=SLVVDUIbIBE

30. **"Langflow Beginners Tutorial 2026: How To Use Langflow"**
    - https://www.youtube.com/watch?v=oc2hos_EJ3Y

### ビジネスユースケース

31. **"I've Built 500 AI Workflows, This is What Businesses Want in 2026"**
    - https://www.youtube.com/watch?v=Y3PcRp5RFzk

32. **"The NEW Way to Build AI Automations in 2026 (Antigravity)"**
    - https://www.youtube.com/watch?v=8MVRda34vjQ

33. **"10 Insane Business Use Cases in n8n!"**
    - https://www.youtube.com/watch?v=W-H2YKyxHrA

### 主要クリエイター情報

| クリエイター | 登録者数 | 特徴 | メインツール |
|------------|---------|------|------------|
| **Nate Herk** | 500K+ | 9ヶ月で0→230K。n8nエージェント構築が中心 | n8n |
| **Jono Catliff** | - | ビジネスオーナー目線の実践的ウォークスルー | Make.com, n8n |
| **Sabrina Ramonov** | - | コンテンツ・SNS自動化に特化した無料チュートリアル | n8n, Make.com |
| **AI Workshop** | - | AIエージェント＆自動化専門チャンネル | n8n |
| **Nick** | - | 高度な技術系。複雑なシステムアーキテクチャ解説 | Make.com, n8n |
| **n8n公式** | - | 公式チュートリアル・ウェビナー | n8n |

---

## 日本語カバー状況

### 現状分析

**n8n 日本語YouTube**
- 「日本語でn8nを学ぶ4つの神サイト！」- 日本語学習リソース紹介動画が存在
- 「n8nで始める日々の業務・AI副業の自動化入門書」- 保存版チュートリアル
- 「AIワークフロー解説のトモ」- n8nワークフロー解説を提供する日本語チャンネル
- note.com上で「そう|n8n x Claude CodeでAI自動化」が技術記事を公開
- Zennでn8nを使ったYouTube動画全自動生成の解説記事あり
- **評価**: コンテンツは増加傾向だが、英語圏の1/50以下。体系的な入門シリーズは皆無

**Dify 日本語YouTube**
- 「2026年最新 最強のAIアプリ開発ツールDify」- 2026年の解説動画
- 「保存版 Dify最強活用術」- 初心者〜中級者向けチュートリアル
- Dify Japan公式アカウント（X）が活動中
- **評価**: n8nより日本語情報はやや多い。Dify自体が日本語UIを完全サポート

**Make.com 日本語YouTube**
- 「無料 絶対にできる！ノーコードツールで完全自動化 Make」- 入門動画
- **評価**: 日本語コンテンツは非常に少ない

**AI自動化ノーコード全般**
- Jinbaflow（日本製ノーコードAIツール）が存在
- ペパコミ等のメディアがノーコードAI解説記事を掲載
- **評価**: 「AI自動化」x「ノーコード」の組み合わせで体系的なYouTubeシリーズはほぼゼロ

### 日本語カバーの空白地帯（=チャンス）

1. n8n入門〜実践までの体系的シリーズ
2. n8n + Claude/MCP連携（日本語コンテンツ皆無）
3. Dify実践ワークフロー構築シリーズ
4. n8n vs Dify vs Make.com比較（日本語動画なし）
5. AIエージェンシー（AAA）ビジネスモデル解説
6. Flowise/Langflow入門（日本語ほぼゼロ）
7. セルフホストAI環境構築ガイド

---

## ツール別の動画企画

### n8n 動画企画

| # | タイトル案 | 想定再生数 | 難易度 |
|---|----------|----------|--------|
| 1 | 【完全入門】n8nとは？3分でわかるAI自動化の最強ツール | 高 | 初級 |
| 2 | n8nを無料でセルフホスト！Docker 10分セットアップ | 高 | 初級 |
| 3 | n8n × ChatGPT：ブログ記事を全自動生成するワークフロー | 高 | 中級 |
| 4 | n8n × Claude：最強AIエージェントを作る方法 | 中 | 中級 |
| 5 | n8nでMCPサーバーを構築！Claude Desktopと連携 | 中 | 上級 |
| 6 | n8nで月収50万円？AIエージェンシービジネスの始め方 | 高 | 初級 |
| 7 | n8nの実務ユースケースTOP10（海外事例から学ぶ） | 中 | 初級 |
| 8 | n8n × Slack × OpenAI：社内AIアシスタント構築 | 中 | 中級 |

### Dify 動画企画

| # | タイトル案 | 想定再生数 | 難易度 |
|---|----------|----------|--------|
| 1 | 【Dify入門】ノーコードでAIチャットボットを30分で作る | 高 | 初級 |
| 2 | DifyでRAGチャットボット！社内文書に質問できるAI | 高 | 中級 |
| 3 | Dify vs n8n：どっちを選ぶべき？用途別完全比較 | 高 | 初級 |
| 4 | DifyでYouTube動画を自動要約するAIアプリを作る | 中 | 中級 |
| 5 | Difyワークフロー機能で複雑なAIパイプラインを構築 | 中 | 上級 |

### Make.com 動画企画

| # | タイトル案 | 想定再生数 | 難易度 |
|---|----------|----------|--------|
| 1 | Make.com入門：ノーコードで業務を自動化する方法 | 中 | 初級 |
| 2 | Make.com × AI：ChatGPTと連携した自動化ワークフロー5選 | 中 | 中級 |
| 3 | Make.com vs n8n vs Zapier：2026年どれを選ぶ？ | 高 | 初級 |

---

## n8n入門シリーズ企画（5本構成）

### シリーズ概要
- **シリーズ名**: 「ゼロから始めるn8n AIエージェント」
- **ターゲット**: プログラミング未経験〜初級者、副業・ビジネス自動化に興味がある層
- **差別化**: 英語圏の人気動画のエッセンスを日本語で体系的に解説

### 第1回：n8nとは？AI自動化の世界へようこそ
- **内容**:
  - n8nの概要（オープンソース、セルフホスト可能、400+連携）
  - なぜ今n8nが世界で爆発的に人気なのか（Nate Herkの成功事例）
  - n8n vs Make.com vs Zapierの簡易比較
  - 実際のワークフロー画面のデモ（「こんなことができる」を見せる）
- **参考動画**: "n8n Quick Start Tutorial: Build Your First AI Agent [2026]"
- **想定尺**: 15分

### 第2回：n8nセットアップ完全ガイド（セルフホスト & クラウド）
- **内容**:
  - n8n cloudの登録方法（最も簡単）
  - Docker Composeでのセルフホスト手順
  - Self-hosted AI Starter Kit の紹介（Ollama + Qdrant + n8n）
  - 初期設定とCredentials（API Key）の登録方法
  - 最初のHello Worldワークフロー
- **参考動画**: "How to Self-Host n8n in 3 minutes", "How to Use n8n in 2026 | First Day Setup"
- **想定尺**: 20分

### 第3回：初めてのAIワークフロー - ChatGPTと連携する
- **内容**:
  - OpenAI APIキーの取得と設定
  - AI Agentノードの基本
  - ブログ記事の自動生成ワークフロー構築（ライブ構築）
  - トリガー設定（Webhook、スケジュール）
  - エラーハンドリングの基本
- **参考動画**: "Automate Your Content with AI | n8n and OpenAI Tutorial"
- **想定尺**: 25分

### 第4回：実践！業務で使えるAI自動化5選
- **内容**:
  - ユースケース1: メール自動返信（Gmail + OpenAI）
  - ユースケース2: Slack通知の自動要約
  - ユースケース3: YouTube動画の自動文字起こし＋要約
  - ユースケース4: SNS投稿の自動生成＋スケジュール投稿
  - ユースケース5: Google Sheetsデータの自動分析レポート
- **参考動画**: "35 Best n8n Use Cases You'll Use Daily", "The Only 12 n8n AI Automations You'll Ever Need"
- **想定尺**: 30分

### 第5回：n8n × Claude × MCP - 最先端AI連携
- **内容**:
  - Claude APIの設定方法
  - n8nでClaudeを使うメリット（長文処理、コード生成）
  - MCPとは何か？なぜ重要か？
  - n8nワークフローをMCPサーバー化する方法
  - Claude DesktopからN8nワークフローを実行するデモ
  - 今後の展望：AIエージェンシービジネスへの道
- **参考動画**: "Claude Code + n8n | Complete Beginners Guide", "Turn n8n workflow into MCP Server"
- **想定尺**: 25分

---

## Dify入門シリーズ企画（5本構成）

### シリーズ概要
- **シリーズ名**: 「Difyで作るAIアプリ入門」
- **ターゲット**: 非エンジニア〜ジュニアエンジニア、社内AIツール導入担当者
- **差別化**: Difyの日本語対応を活かし、日本のビジネスシーンに即した実用例

### 第1回：Difyとは？30分でAIチャットボットを作ろう
- **内容**:
  - Difyの概要（オープンソース、50K+ Stars、日本語完全対応）
  - Dify Cloud vs セルフホストの選び方
  - アカウント作成〜最初のチャットボット作成ライブ
  - LLMプロバイダー設定（OpenAI / Claude）
  - プロンプトエンジニアリングの基本
- **参考動画**: "Master Dify AI in 1 Hour: Complete Beginner's Guide for 2026"
- **想定尺**: 20分

### 第2回：RAGチャットボット - 社内文書AIを作る
- **内容**:
  - RAG（Retrieval-Augmented Generation）とは何か
  - ナレッジベースの作成とドキュメントアップロード
  - ベクトルストアの設定
  - 社内FAQ・マニュアルをAIに学習させるデモ
  - 精度向上のコツ（チャンクサイズ、埋め込みモデル選択）
- **想定尺**: 25分

### 第3回：Difyワークフロー機能で複雑なAIパイプラインを構築
- **内容**:
  - ワークフロー機能の概要
  - 条件分岐とループの使い方
  - 外部API連携（HTTPリクエストノード）
  - YouTube動画URLから自動で要約レポートを作成するワークフロー
  - ワークフローのデバッグ方法
- **想定尺**: 25分

### 第4回：Difyエージェント機能 - ツールを使うAIを作る
- **内容**:
  - エージェント機能とは
  - ビルトインツール（Web検索、計算等）の活用
  - カスタムツールの作成
  - マルチステップ推論のデモ
  - 実用例：競合調査AIエージェント
- **想定尺**: 20分

### 第5回：Dify vs n8n - 使い分け戦略と両方活用する方法
- **内容**:
  - Difyが得意なこと（AIアプリ開発、チャットボット、RAG）
  - n8nが得意なこと（ワークフロー自動化、多アプリ連携、MCP）
  - 両方を組み合わせる最強パターン（Dify API → n8nワークフロー）
  - ビジネスシーン別の選び方フローチャート
  - AIエージェンシービジネスでの活用戦略
- **参考動画**: "Dify Vs n8n: Which Is Best In 2025?", "Dify vs n8n - Full Comparison"
- **想定尺**: 20分

---

## emperor_ch用の動画企画15個

### 企画リスト

#### カテゴリA: 入門・比較系（高再生数狙い）

**1. 「n8n vs Dify vs Make.com：2026年最強のAI自動化ツールはどれ？」**
- 形式: 比較レビュー
- 再生数見込み: 高（比較動画は検索需要大）
- 内容: 3ツールを同じタスクで比較、用途別おすすめ
- 差別化: 英語圏では大量に存在するが日本語ではゼロ

**2. 「【衝撃】海外で月収100万円稼ぐ"AI自動化ビジネス"とは？AAA完全解説」**
- 形式: 解説＋事例紹介
- 再生数見込み: 非常に高（稼ぐ系×AI）
- 内容: AIエージェンシー（AAA）のビジネスモデル、n8n/Make.comを使ったサービス提供方法、海外のNate Herkの成功事例
- 差別化: AAAビジネスモデルの日本語解説は皆無

**3. 「プログラミング不要！n8nで始めるAI自動化【完全入門】」**
- 形式: ハンズオンチュートリアル
- 再生数見込み: 高
- 内容: n8nのセットアップから最初のAIワークフローまで
- 差別化: 日本語での体系的n8n入門は存在しない

#### カテゴリB: 実践・ユースケース系（実用価値）

**4. 「n8nでYouTube運営を全自動化する方法」**
- 形式: ワークフロー構築デモ
- 再生数見込み: 中〜高
- 内容: タイトル・説明文・タグのAI自動生成、サムネイル分析、コメント分析、投稿スケジューリング
- 参考: n8nテンプレート"Automated YouTube video scheduling & AI metadata generation"

**5. 「ChatGPT × n8n：ブログ記事を全自動で書かせる仕組みを作った」**
- 形式: 構築過程ドキュメンタリー
- 再生数見込み: 高
- 内容: キーワードリサーチ→記事生成→WordPress投稿の完全自動化

**6. 「Difyで社内AIチャットボットを作ってみた【RAG活用】」**
- 形式: 実践チュートリアル
- 再生数見込み: 中
- 内容: 社内マニュアルをDifyに読み込ませてQ&Aボットを構築
- ターゲット: 企業の情報システム部門、経営者

**7. 「n8n × Claude × MCP：次世代のAI連携を日本語で完全解説」**
- 形式: 技術解説＋デモ
- 再生数見込み: 中
- 内容: MCPプロトコルの概要、n8nをMCPサーバー化、Claude Desktopとの連携
- 差別化: MCP x n8nの日本語解説は完全に空白

**8. 「海外で200時間の作業を削減したn8n活用事例TOP5」**
- 形式: 事例紹介
- 再生数見込み: 中
- 内容: Delivery Hero（月200時間削減）、Musixmatch（4ヶ月で47日分削減）等の実例

#### カテゴリC: トレンド・最新情報系

**9. 「2026年、AIエージェントが仕事を変える - n8nで体験してみた」**
- 形式: トレンド解説＋実演
- 再生数見込み: 高
- 内容: AIエージェントとは何か、n8nでのAIエージェント構築デモ、ビジネスインパクト

**10. 「Zapierはもう古い？2026年にn8nに乗り換えるべき5つの理由」**
- 形式: 比較＋意見系
- 再生数見込み: 高（論争系は伸びやすい）
- 内容: コスト比較、AI機能差、セルフホストのメリット、コミュニティ成長

**11. 「FlowiseとLangflow：無料で使えるAIエージェントビルダー2選」**
- 形式: ツール紹介＋比較
- 再生数見込み: 中
- 内容: 両ツールの特徴、セットアップ、簡単なRAGチャットボット構築
- 差別化: 日本語コンテンツはほぼゼロ

#### カテゴリD: ビジネス戦略系

**12. 「AI自動化スキルで副業する方法 - 海外YouTuberの戦略を分析」**
- 形式: 戦略解説
- 再生数見込み: 高
- 内容: 英語圏のAI自動化YouTuber（Nate Herk、Jono Catliff等）の成長戦略分析、日本市場での応用

**13. 「ノーコードAI市場は2030年に250億ドル - 今すぐ始めるべき理由」**
- 形式: 市場分析＋ロードマップ
- 再生数見込み: 中
- 内容: ノーコードAI市場の成長率（31-38% CAGR）、参入チャンス、学習ロードマップ

**14. 「n8nでAI自動化ポートフォリオを作る - クライアント獲得への道」**
- 形式: キャリア戦略＋実践
- 再生数見込み: 中
- 内容: AI自動化スキルのポートフォリオ構築方法、実際のワークフロー作成、クライアントへの提案方法

**15. 「【実験】AIに1週間YouTubeチャンネルを運営させてみた（n8n全自動）」**
- 形式: チャレンジ系
- 再生数見込み: 非常に高（実験系は伸びやすい）
- 内容: n8nでトピック選定→台本生成→音声生成→動画編集→アップロードを完全自動化し、1週間運用した結果を報告
- 参考: n8nコミュニティの"How I Built a YouTube Automation That Creates Viral Long-Form Videos with AI"

### 推奨公開順序

1. **企画2**（AAA解説）→ チャンネルのポジショニング確立
2. **企画3**（n8n入門）→ 検索流入の基盤
3. **企画1**（3ツール比較）→ 比較検索需要を獲得
4. **企画5**（ブログ全自動化）→ 実用価値で信頼獲得
5. **企画15**（1週間チャレンジ）→ バイラル狙い
6. **企画9**（AIエージェント解説）→ トレンド需要
7. **企画6**（Difyチャットボット）→ Dify層を取り込み
8. 以降は反応を見ながら調整

---

## 補足：主要情報ソース

### 英語圏の学習リソース
- n8n公式ドキュメント: https://docs.n8n.io/
- n8n Self-hosted AI Starter Kit: https://github.com/n8n-io/self-hosted-ai-starter-kit
- Dify公式ドキュメント: https://docs.dify.ai
- n8nワークフローテンプレート: https://n8n.io/workflows/
- Medium記事「11 YouTube Channels to Learn AI Automation for Free」(2026年3月)

### 日本語リソース
- note.com「そう|n8n x Claude CodeでAI自動化」
- Zenn「AIエージェントで動画を全自動生成！n8nワークフロー」
- Qiita: n8nを使った翻訳動画自動アップロード事例
- AI-NATIVE.jp: n8n完全解説
- ペパコミ: ノーコードAI解説

### 市場データ
- ノーコードAI市場: 31-38% CAGR、2030年に約250億ドル見込み
- チーム効率: 最大90%のビルドサイクル短縮
- Zapier: 数億ドルARR、800人規模
- Make.com: 350,000+ユーザー
- n8n YouTube教育者Nate Herk: 9ヶ月で0→230K→現在500K+登録者
