# AI×ゲーム開発調査
日付: 2026-05-01

---

## 英語圏のAIゲーム開発トレンド

### 1. Vibe Coding（バイブコーディング）の爆発的普及
- 自然言語でAIに指示してコードを書かせる開発スタイルが主流化
- Cursor、Claude Code、Bolt.new などが主要ツール
- 「コードの90%以上をAIが書く」ことがゲームジャム参加条件になるほど浸透
- Andrej Karpathy が名付けた概念が、ゲーム開発で最も実践的に活用されている

### 2. YouTube Playables Builder（Gemini 3搭載）
- YouTubeがGemini 3を使ったゲーム生成ツール「Playables Builder」のベータを開始
- テキスト・画像・動画プロンプトから数分でプレイ可能なゲームを生成
- コーディング知識不要、米国・カナダ・英国・豪州でクローズドベータ中
- 現状6つのAI生成ゲームがYouTubeでプレイ可能（ただし評価はまだ低い）
- Gamedev.js Jam 2026でYouTube Playablesチャレンジも開催

### 3. Google DeepMind「Project Genie」（Genie 3）
- Genie 2の後継モデル。単一のプロンプト画像からプレイ可能な3Dワールドを生成
- 20-24fpsのリアルタイムインタラクション
- 2026年1月29日にGoogle AI Ultra加入者向けに公開
- ファーストパーソン・アイソメトリックなど複数視点に対応

### 4. NVIDIA NitroGen
- 1,000以上のゲームの4万時間のプレイ動画で学習した汎用ゲームAIエージェント
- 画面のピクセル入力からゲームパッド操作を予測
- 未知のゲームへの転移学習で最大52%の成功率向上
- オープンソースで公開（モデル重み・データセット・コード全て）
- NVIDIA、Stanford、Caltechの共同研究

### 5. Unity AI（Unity 6.2以降）
- 自然言語だけでカジュアルゲーム全体を生成可能に（GDC 2026で発表）
- コード生成、スプライト・テクスチャ・アニメーションなどのアセット生成
- エージェント型のAIアシスタントがエディタ内で動作
- Unity AI Betaで大幅にアップグレードされたエージェント機能をテスト中

### 6. Unreal Engine × AI
- Blueprint自動生成プラグインが複数登場（Behavior Tree、Widget、World生成にも対応）
- 「Aura」：Unreal Editor専用AIエージェント（2026年1月ローンチ）
- NVIDIA DLSS 4.5との統合（CES 2026発表）
- NVIDIAがスタジオと協力しAIコーディングの精度向上に取り組み

### 7. Godot × AI
- 「AI Assistant Hub」：Godotエディタ内にAIアシスタントを埋め込むプラグイン
- 「Godot AI」：MCP対応AIアシスタント（Claude Code、Cursor等）をGodotエディタに接続
- シーン構築、スクリプト作成、UI設計、アニメーション、パーティクルまでチャットから操作可能

### 8. Claude Code Game Studios
- Claude Codeを49のAIエージェントで構成されたゲーム開発スタジオに変換するOSSプロジェクト
- 72のワークフロースキル、12の自動フック
- ディレクター → 部門リード → スペシャリストの3階層構造
- Godot、Unity、Unreal対応
- GitHubでオープンソース公開中

### 9. AI NPC の進化
- リアルタイム音声対話可能なNPCが実現（NPCAI v3.0など）
- ゲーマーの99%がAI NPCはゲームプレイを向上させると回答
- AI Gaming市場は2034年までに378.9億ドルに到達予測
- Game AI NPC市場は2025年の5億ドルからCAGR 25%で成長

### 10. AIゲーム音楽
- アダプティブBGM生成が実用段階に（リアルタイムの気分変化、ループトラック生成）
- Suno/Udioの「垂れ流し」チャンネルはYouTubeで収益化不可に
- 人間のキュレーション・解説付きならRPM $3-10で収益化可能
- AI音声の著作権問題が顕在化（Silent Hill 2楽曲での事例）

---

## Vibe Jamとは

### 概要
- Pieter Levels（@levelsio）が主催するAIコーディングゲームジャム
- 2025年に第1回開催、2026年で第2回
- スポンサー：Cursor、Bolt.new

### Vibe Jam 2026 詳細
- **開催期間**: 2026年4月1日 ~ 5月1日 13:37 UTC
- **賞金総額**: $40,000（Gold: $25,000、Silver: $10,000、Bronze: $5,000）
- **ルール**:
  - コードの90%以上がAI生成であること
  - Webブラウザでログイン不要・無料プレイ可能
  - ローディング画面・重いダウンロード禁止（即プレイ可能であること）
  - ジャム期間中に新規作成したゲームのみ
- **意義**: AIコーディングの実力を測るベンチマーク的イベントとして定着
- 2025年のベストゲームまとめ動画「The Best AI-MADE VIDEOGAMES」もYouTubeで人気

### 関連ゲームジャム
- **Jabali AI Game Jam（GDC 2026）**: 24時間でAI使用ゲームを制作（3月7-8日）
- **Gamedev.js Jam 2026**: テーマ「Machines」、AI使用推奨、YouTube Playablesチャレンジ併設

---

## 日本語でまだないテーマ

以下は英語圏で活発に動画が作られているが、日本語ではほぼカバーされていない分野：

### 1. Vibe Jam / Vibe Coding ゲームジャムの実況・解説
- 英語では多数のチュートリアル・参加レポート動画あり
- 日本語ではVibe Codingの概念紹介すらほぼない

### 2. YouTube Playables Builder の使い方・レビュー
- 英語ではベータ体験レポートやチュートリアルが出始めている
- 日本語カバーはゼロに近い

### 3. Claude Code Game Studios（49エージェント体制）
- マルチエージェントでのゲーム開発ワークフロー
- 日本語解説は皆無

### 4. NVIDIA NitroGen のゲーム開発への応用
- 汎用ゲームAIエージェントの技術解説
- 日本語では未カバー

### 5. Google Project Genie（Genie 3）でのワールド生成
- 実際の操作デモやゲーム開発への応用
- 日本語では概要紹介のみ

### 6. Unreal Engine向けAIプラグイン（Aura等）の実践チュートリアル
- Blueprint自動生成の実演
- 日本語ではほぼなし

### 7. Godot × MCP × Claude Code の統合ワークフロー
- チャットからゲームを構築する実演
- 日本語では未カバー

### 8. AIゲーム音楽のアダプティブ生成
- リアルタイムに変化するBGM生成の技術と実装
- 日本語では音楽生成AIの紹介止まり

### 9. AI NPC のリアルタイム音声対話実装
- GTA MODのNPCAI v3.0のような実装チュートリアル
- 日本語ではほぼなし

### 10. AIゲーム収益化のYouTubeポリシー解説
- AI生成コンテンツの収益化ルール・開示要件
- 日本語では体系的な解説なし

---

## emperor_ch用の動画企画15個

### 企画1: 「Vibe Codingでゲームを作る完全ガイド2026」
- **内容**: Vibe Codingの概念説明 → Cursor/Claude Codeのセットアップ → 実際にブラウザゲームを1本作る全工程
- **差別化**: 日本語初の本格的Vibe Codingゲーム開発チュートリアル
- **参考**: "How to Make Games with AI in 2026 | Best Vibe Coding Tools" (youtube.com/watch?v=HBd-dZ9qZZI)

### 企画2: 「Vibe Jam 2026に挑戦してみた」
- **内容**: Vibe Jamのルール紹介 → 実際にAI90%でゲーム制作 → 提出までのドキュメンタリー
- **差別化**: 日本人参加者の視点でVibe Jamを紹介した動画は存在しない
- **参考**: "How To Vibe Code Your First Game for levelsio's $35k Vibe Jam" (youtube.com/watch?v=yKyjcbQiar4)

### 企画3: 「YouTube Playables Builderで5分ゲーム制作」
- **内容**: Gemini 3搭載のPlayables Builderでテキストプロンプトからゲームを生成するデモ
- **差別化**: 日本語でのPlayables Builder解説は皆無
- **参考**: YouTube Playables Builder公式（youtube.com/playablesbuilder/）

### 企画4: 「Claude Code Game Studios - 49のAIエージェントでゲーム開発」
- **内容**: OSSプロジェクトの導入 → 実際にゲームを1本作る → マルチエージェントの動きを可視化
- **差別化**: 英語でもまだ少ない最先端テーマ、日本語では完全に空白
- **参考**: GitHub Donchitos/Claude-Code-Game-Studios

### 企画5: 「Google Project Genieでゲームの世界を自動生成してみた」
- **内容**: Genie 3の概要 → 実際にプロンプトからワールド生成 → ゲーム開発への応用可能性
- **差別化**: 日本語では概要紹介止まり、実操作デモなし
- **参考**: labs.google/projectgenie

### 企画6: 「NVIDIA NitroGen解説 - AIがゲームを見て学んで遊ぶ時代」
- **内容**: NitroGenの技術解説 → 1000+ゲームで学習した汎用AIの実力 → ゲーム開発への影響
- **差別化**: 日本語での解説動画なし
- **参考**: nitrogen.minedojo.org

### 企画7: 「Unity AI vs Claude Code vs Cursor - AIゲーム開発ツール徹底比較」
- **内容**: 3つのツールで同じゲームを作って比較 → 速度・品質・使いやすさ
- **差別化**: ツール比較は英語でもまだ少ない
- **参考**: "I Asked Claude to Make a Game in 3 Different Engines" (youtube.com/watch?v=L_NyloMkfQg)

### 企画8: 「Godot + Claude Code MCPでチャットからゲームを作る」
- **内容**: Godot AIプラグインのセットアップ → Claude Codeと接続 → チャットだけでゲーム制作
- **差別化**: MCP統合のゲーム開発チュートリアルは日本語で皆無
- **参考**: github.com/FlamxGames/godot-ai-assistant-hub

### 企画9: 「AIでゲームBGMをリアルタイム生成する方法」
- **内容**: アダプティブ音楽生成の概念 → 実装デモ → ゲームへの組み込み
- **差別化**: ゲーム用AI音楽の実装チュートリアルは日本語になし
- **参考**: soundverse.aiのゲーム開発向けAI音楽ガイド

### 企画10: 「AI NPCと会話できるゲームを作ってみた」
- **内容**: LLM搭載NPCの実装 → リアルタイム音声対話の技術 → デモプレイ
- **差別化**: AI NPC実装のチュートリアルは日本語でほぼ空白
- **参考**: "I Tried to Convince Intelligent AI NPCs They are Living in a Simulation" (youtube.com/watch?v=aihq6jhdW-Q)

### 企画11: 「Unreal Engine AIプラグイン『Aura』でBlueprint自動生成」
- **内容**: Auraのインストール → Blueprint自動生成デモ → Behavior Tree・Widget生成
- **差別化**: UEのAIプラグイン実践チュートリアルは日本語にない
- **参考**: "This Unreal Engine AI Plugin DOES EVERYTHING" (youtube.com/watch?v=jhmAcoOCB0Y)

### 企画12: 「プログラミング経験ゼロからAIだけでゲームをリリースする方法」
- **内容**: ノーコード/ローコードAIツール一覧 → 実際にitch.ioでリリースまで
- **差別化**: 完全初心者向けの日本語チュートリアルが不足
- **参考**: "How to Make a Game with AI - Full Tutorial for Beginners 2026" (youtube.com/watch?v=sC-rgNaI_E0)

### 企画13: 「AIゲーム開発で稼ぐ - YouTubeの収益化ルール完全解説2026」
- **内容**: AI生成コンテンツのYouTube収益化ポリシー → 開示要件 → セーフな運用方法
- **差別化**: AIコンテンツ収益化の日本語ガイドは体系的なものがない
- **参考**: vidiq.com/blog/post/youtube-ai-monetization/

### 企画14: 「2025 Vibe Jamのベストゲームから学ぶAIゲーム開発のコツ」
- **内容**: 2025年Vibe Jam入賞作品レビュー → 成功パターン分析 → 2026年への教訓
- **差別化**: 日本語でのVibe Jam作品レビューは存在しない
- **参考**: "The Best AI-MADE VIDEOGAMES (2025 Vibe Coding Game Jam)" (youtube.com/watch?v=-stDMq7S8Q0)

### 企画15: 「AIローグライクを作ってみた - 全要素AI生成RPGの可能性」
- **内容**: AI Rogueliteのコンセプト紹介 → 自分でAI生成ローグライクを制作 → NPC・ダンジョン・アイテム全てAI
- **差別化**: AI×ローグライクの制作チュートリアルは日本語で未開拓
- **参考**: AI Roguelite (store.steampowered.com/app/1889620/)

---

## 調査に使用したソース

### YouTube動画・チャンネル
- [My Top AI Tools for Game Development 2026](https://www.youtube.com/watch?v=cx3RDH1P75c)
- [How to Make Games with AI in 2026 | Best Vibe Coding Tools](https://www.youtube.com/watch?v=HBd-dZ9qZZI)
- [How to Make a Game with AI - Full Tutorial for Beginners 2026](https://www.youtube.com/watch?v=sC-rgNaI_E0)
- [How To Vibe Code Your First Game for levelsio's $35k Vibe Jam](https://www.youtube.com/watch?v=yKyjcbQiar4)
- [I Asked Claude to Make a Game in 3 Different Engines](https://www.youtube.com/watch?v=L_NyloMkfQg)
- [DeepMind Just Made The Most Powerful Game AI Engine!](https://www.youtube.com/watch?v=YvuEKrJhjos)
- [The Slop Apocalypse: How AI is Breaking Game Engines](https://www.youtube.com/watch?v=T23m4pPrYxw)
- [This Unreal Engine AI Plugin DOES EVERYTHING](https://www.youtube.com/watch?v=jhmAcoOCB0Y)
- [Blueprint Generation AI is now AVAILABLE! Unreal Engine](https://www.youtube.com/watch?v=sDdECLkWJpQ)
- [Unity's new AI looks SURPRISINGLY useful!](https://www.youtube.com/watch?v=_QrcgWsr2PI)
- [We Need to Talk About AI Video Game Music](https://www.youtube.com/watch?v=BGbfH_WdLcI)
- [Is AI Going To Destroy The Indie Game Industry?](https://www.youtube.com/watch?v=rAl7D-oVpwg)
- [AI Game Jam 2026: AI Augmented Game Development](https://www.youtube.com/watch?v=ZbDxYHaqk1Q)
- [The Best AI-MADE VIDEOGAMES (2025 Vibe Coding Game Jam)](https://www.youtube.com/watch?v=-stDMq7S8Q0)
- [I Tried to Convince Intelligent AI NPCs They are Living in a Simulation](https://www.youtube.com/watch?v=aihq6jhdW-Q)
- [How to Make a Game with AI in 5 Minutes (No Code) - Combos.fun](https://www.youtube.com/watch?v=d3WKJqiPk30)
- [Vibe Coding Tutorial for Beginners 2026](https://www.youtube.com/watch?v=Q_FZ800Hm4g)
- [Claude Code Game Studios: 49 Agents IA](https://www.youtube.com/watch?v=abTgoxtkVsg)
- [AI and Games チャンネル](https://www.youtube.com/channel/UCov_51F0betb6hJ6Gumxg3Q)
- [Game Dev With AI チャンネル](https://www.youtube.com/@GameDevWithAI)

### 公式サイト・ツール
- [Vibe Jam 2026 公式](https://jam.pieter.com/2026/)
- [YouTube Playables Builder](https://www.youtube.com/playablesbuilder/)
- [Google Project Genie](https://labs.google/projectgenie)
- [NVIDIA NitroGen](https://nitrogen.minedojo.org/)
- [Claude Code Game Studios (GitHub)](https://github.com/Donchitos/Claude-Code-Game-Studios)
- [Unity AI Beta 2026](https://discussions.unity.com/t/unity-ai-beta-2026-is-here/1703625)
- [Aura: AI Agent for Unreal Editor](https://forums.unrealengine.com/t/aura-ai-agent-for-unreal-editor/2689209)
- [Godot AI Assistant Hub (GitHub)](https://github.com/FlamxGames/godot-ai-assistant-hub)
- [AI Roguelite (Steam)](https://store.steampowered.com/app/1889620/AI_Roguelite/)
- [VibeGame Engine (HuggingFace)](https://huggingface.co/blog/vibegame)

### 記事・レポート
- [YouTube Playables Builder 解説 (Creative Bloq)](https://www.creativebloq.com/3d/video-game-design/you-can-now-play-ai-generated-games-in-youtube)
- [YouTube Playables Builder Beta (Quasa.io)](https://quasa.io/media/youtube-s-playables-builder-beta-empowering-creators-to-craft-ai-generated-games-without-a-line-of-code)
- [YouTube 2026 AI Arsenal (WebProNews)](https://www.webpronews.com/youtubes-2026-ai-arsenal-creators-clone-themselves-shop-seamlessly-game-from-text/)
- [AI Music for Game Developers 2026 (Soundverse)](https://www.soundverse.ai/blog/article/ai-music-for-game-developers-and-indie-studios-0130)
- [YouTube AI Monetization (vidIQ)](https://vidiq.com/blog/post/youtube-ai-monetization/)
- [Vibe Coding 解説 (Google Cloud)](https://cloud.google.com/discover/what-is-vibe-coding)
- [NVIDIA NitroGen 解説 (Tom's Hardware)](https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidia-led-nitrogen-is-a-generalist-video-gaming-ai-that-can-play-any-title-research-also-has-big-implications-for-robotics)
- [Jabali AI Game Jam at GDC 2026](https://m.thewire.in/article/ptiprnews/jabali-announces-the-jabali-ai-game-jam-at-gdc-2026-on-march-7th-and-8th)

### 日本語リソース
- [AIゲームクリエイターズ (YouTube)](https://www.youtube.com/@ai_game_creators)
- [AIゲームビルダー (WillBooster)](https://www.willbooster.com/ai-game-builder/)
- [ゲーム制作向けAI系動画まとめ (YouTube Playlist)](https://www.youtube.com/playlist?list=PL8UAhU6JUgo1oC-T7KcHmjfVMOo9sQF2n)
- [AIでつくるゲーム入門 (ai-gaming.jp)](https://www.ai-gaming.jp/1600/ai%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E3%82%B2%E3%83%BC%E3%83%A0%E5%85%A5%E9%96%800%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E5%80%8B%E4%BA%BA%E9%96%8B%E7%99%BA%E7%94%9F/)
