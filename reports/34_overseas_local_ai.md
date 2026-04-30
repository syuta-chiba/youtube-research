# 海外AI YouTube調査: ローカルAI・オープンソース編
日付: 2026-05-01

---

## 英語圏で人気だが日本語にまだないテーマ

### 1. OpenClaw（旧Open Interpreter後継）によるローカルAIエージェント構築
英語圏では「OpenClaw + Ollama」でコマンド実行・ファイル操作・Web閲覧ができる完全ローカルAIエージェントの構築チュートリアルが急増中。日本語での解説動画はほぼゼロ。OpenClawはOpen WebUIとは別物で、AIに「手」を与えるフレームワーク（シェルコマンド実行、ファイル読み書き、ブラウジング、Telegram/Slack/WhatsApp連携）。

### 2. AIホームサーバー構築（$750〜$3,500のティア別ビルドガイド）
英語圏では「RTX 3090で$750のAIサーバー」「8GPU搭載の本格AIホームサーバー」「36TB NAS + ローカルAIサーバー一体型」など、具体的な予算帯別のビルド動画が大人気。日本語では「ローカルLLMの動かし方」は紹介されるが、ハードウェアビルドガイド形式の動画はほぼない。

### 3. Llama 4 Scout/MaverickのローカルMoE完全攻略
Llama 4 Scout（109B MoE、17Bアクティブ、10Mコンテキスト）がRTX 3090一枚で動く衝撃。英語圏では「I Tested 11 Best Local LLMs (April 2026)」のような比較検証動画が多数。日本語ではLlama 4の紹介記事はあるが、実機ベンチマーク比較YouTube動画はほぼない。

### 4. SLM（Small Language Model）のiPhone/エッジデバイス展開
「Small Language Models Are the Future: Fine-Tuning AI That Runs on Your iPhone」「The New 4GB Champion」など、SLMに特化した動画が英語圏で急成長。Phi-4 Mini、Gemma 3、Qwen3の4B以下モデルをモバイルで動かすチュートリアル。日本語ではSLM特化の動画コンテンツがほぼない。

### 5. Claude Code + Ollama = 完全ローカルAIコーディングエージェント
「Claude Code for FREE with Ollama」「Full Local AI Agent」など、Claude Codeをローカルモデルで無料利用する方法が英語圏で大バズり。日本語ではClaude Code自体の紹介はあるが、Ollama連携でのローカル化解説は未開拓。

### 6. Raspberry Pi 5 + AI HAT+ 2によるエッジAI
Raspberry Pi用の新しいAI HAT+ 2（Hailo 10H搭載、8GB RAM追加）でのローカルAI推論が英語圏で盛り上がり中。40TOPSのポータブルAIビーストの構築動画など。日本語ではRaspberry Pi AIの最新ハードウェア解説動画がほぼない。

### 7. ローカルRAG 2026年版（「RAGは死んだのか？」論争含む）
「Is RAG Dead in 2026?」という1Mコンテキスト時代のRAG存在意義を問う動画が話題。結論は「死んでない」だが、その理由と実装方法のアップデートが重要。日本語ではRAGの基本解説はあるが、2026年版の最新議論をカバーする動画がない。

### 8. GRPO/RULERによる新世代ファインチューニング
報酬関数なし・ラベルデータなしで、経験を通じてエージェントが改善するGRPO/RULERベースのファインチューニング手法が英語圏で注目。FreeCodeCampの12時間コースも公開。日本語ではLoRA/QLoRAの解説止まりで、GRPOまでカバーするYouTubeコンテンツがない。

### 9. Ollama vs LM Studio vs GPT4All vs Jan 四つ巴比較
英語圏では4ツール横断比較動画が複数あり、インフラ・アプリケーション・プライバシー・ハイブリッドの4軸で評価。日本語ではOllamaとLM Studioの個別紹介はあるが、4ツール網羅的比較動画はない。

### 10. ComfyUI + LTX-2.3/WAN 2.2でのローカルAI動画生成
NVIDIAがGDC 2026で発表したComfyUI連携強化。LTX-2.3やWAN 2.2を使い、4K AI動画をローカルGPUで生成。RTX Video Super Resolutionによるリアルタイム4Kアップスケール対応。日本語ではFramePack-eichiなど一部ツールの紹介はあるが、ComfyUI + LTX/WANの最新ワークフロー解説は手薄。

---

## 発見した英語チャンネルリスト

### Tier 1: ローカルAI特化チャンネル（最重要フォロー対象）

| チャンネル名 | 登録者数 | 特徴 |
|---|---|---|
| **Matt Wolfe** | 900K+ | AI全般ニュース、FutureTools.io運営、The Next Wave Podcast |
| **NetworkChuck** | 4M+ | ネットワーク・AI・自宅サーバー、初心者向け |
| **Techno Tim** | 800K+ | ホームラボ・セルフホスト・AI、Proxmox + Ollama構築 |
| **Digital Spaceport** | 100K+ | ローカルAIサーバービルド専門、8GPU構築など |
| **AI Agents A-Z** | 50K+ | AIエージェント専門チャンネル |
| **Nate Herk** | 600K+ | AI自動化ワークフロー、元ゴールドマン |

### Tier 2: 技術チュートリアル系

| チャンネル名 | 特徴 |
|---|---|
| **Two Minute Papers** | 論文解説、Karoly Zsolnai-Feher |
| **Tech With Tim** | 1.89M登録、プログラミング + AI開発 |
| **freeCodeCamp** | 12時間LLMファインチューニングコースなど無料教育 |
| **Matt Williams (Ollama)** | Ollama公式チュートリアルシリーズ |

### Tier 3: ハードウェア・ビルド系

| チャンネル名 | 特徴 |
|---|---|
| **Jeff Geerling** | Raspberry Pi + AIハードウェア |
| **Wolfgang's Channel** | ホームサーバー・NAS + AI構築 |
| **PC Build Advisor** | AIサーバー用ミニPC比較 |

---

## 日本語で最初にやれば勝てるテーマTOP10

### 1. 【完全ガイド】OpenClaw + Ollamaで作る無料ローカルAIエージェント
- 競合度: 極低（日本語動画ゼロ）
- 需要予測: 高（AIエージェントブームの中でローカル版は未開拓）
- 参考: https://www.youtube.com/watch?v=mc4qgknN-90

### 2. 【予算別】AIホームサーバー構築ガイド（$750/$1,500/$3,500）
- 競合度: 極低（日本語でのAIサーバービルド動画なし）
- 需要予測: 高（自作PC勢 + AI勢の交差点）
- 参考: https://www.youtube.com/watch?v=JdMntrGUTmw

### 3. 【2026年最新】ローカルLLM 11モデル実機ベンチマーク対決
- 競合度: 低（日本語での網羅的比較動画なし）
- 需要予測: 非常に高（モデル選びに困っている人が多い）
- 参考: https://www.youtube.com/watch?v=SLtKGhOXamQ

### 4. 【衝撃】Llama 4 ScoutがRTX 3090一枚で動く！10Mコンテキストの実力検証
- 競合度: 低
- 需要予測: 高（Meta公式モデルへの関心は日本でも高い）

### 5. 【SLM革命】4GBで動くAI！スマホ・ノートPCで使えるSmall Language Model入門
- 競合度: 極低（日本語SLM特化コンテンツなし）
- 需要予測: 中〜高（低スペックPCユーザーの潜在需要大）
- 参考: https://www.youtube.com/watch?v=8-Wp2isplpc

### 6. 【無料】Claude Codeを Ollamaでローカル化する方法
- 競合度: 低
- 需要予測: 非常に高（Claude Code人気 + API料金の壁）
- 参考: https://www.youtube.com/watch?v=-V8fWL3oXTQ

### 7. 【2026年版】RAGは死んだのか？1Mコンテキスト時代のローカルRAG最適解
- 競合度: 低（日本語での2026年版RAG議論なし）
- 需要予測: 高（エンジニア向けだが関心度高い）
- 参考: https://www.youtube.com/watch?v=jdknLDkBS3k

### 8. 【徹底比較】Ollama vs LM Studio vs GPT4All vs Jan どれを選ぶべき？2026年版
- 競合度: 低（個別紹介はあるが4ツール比較はない）
- 需要予測: 非常に高（初心者が最初に知りたい情報）
- 参考: https://www.youtube.com/watch?v=XNUHOZM5gZU

### 9. 【Raspberry Pi 5】AI HAT+ 2で40TOPSのエッジAIマシンを作る
- 競合度: 極低
- 需要予測: 中（Raspberry Piコミュニティとの交差）
- 参考: https://www.youtube.com/watch?v=A6RARLQ0hhU

### 10. 【GRPO入門】報酬関数なしでLLMをファインチューニングする新手法
- 競合度: 極低（日本語解説ゼロ）
- 需要予測: 中（技術者向けだが先行者利益大）
- 参考: https://www.youtube.com/watch?v=lLkE9w1NJs0

---

## emperor_ch用の具体的な動画企画15個

### 企画1: 「完全無料でChatGPTクローンを自宅に作る方法【OpenClaw + Ollama 2026】」
- 形式: チュートリアル（15〜20分）
- 内容: OpenClawのインストールからOllama連携、Gemma 4モデル導入、Telegram/LINE連携まで
- フック: 「月額0円で自分専用のChatGPTが手に入る」
- ターゲット: AI初心者〜中級者
- 英語参考: https://www.youtube.com/watch?v=mc4qgknN-90

### 企画2: 「【予算7万円】AI専用ホームサーバーを組んでみた」
- 形式: ビルドログ + ベンチマーク（20〜25分）
- 内容: RTX 3090中古 + ミニPC構成、Proxmox + Ollama + Open WebUIセットアップ、電気代計算
- フック: 「毎月のAPI課金から解放される」
- ターゲット: 自作PC勢、AI課金に悩む人
- 英語参考: https://www.youtube.com/watch?v=3XC8BA5UNBs

### 企画3: 「2026年ローカルLLMランキングTOP10【実機テスト】」
- 形式: ベンチマーク比較（15〜20分）
- 内容: Llama 4 Scout、Gemma 4、Qwen3.5、DeepSeek V3.2、Phi-4等を日本語タスクで比較
- フック: 「日本語で一番賢いローカルAIはどれ？」
- ターゲット: ローカルLLM興味層全般
- 英語参考: https://www.youtube.com/watch?v=SLtKGhOXamQ

### 企画4: 「Llama 4 Scoutの衝撃 - RTX 3090一枚で10Mトークン処理できるAI」
- 形式: レビュー + 実演（12〜15分）
- 内容: MoEアーキテクチャ解説、インストール手順、長文処理デモ、日本語性能テスト
- フック: 「無料で使えるGPT-4レベルのAI」
- ターゲット: AI技術に関心のある層

### 企画5: 「【初心者向け】Ollamaの始め方 完全ガイド2026年版」
- 形式: 初心者チュートリアル（10〜15分）
- 内容: Windows/Mac/Linuxインストール、日本語モデル導入（ELYZA、Qwen3）、基本操作、Open WebUI接続
- フック: 「10分で自分のPCにAIが入る」
- ターゲット: 完全初心者
- 英語参考: https://www.youtube.com/watch?v=tVTwZRhxw9w

### 企画6: 「スマホで動くAI！SLM（Small Language Model）完全入門」
- 形式: 解説 + デモ（12〜15分）
- 内容: SLMとは何か、Phi-4 Mini / Gemma 3 / Qwen3 4Bの比較、iPhone/Android実機デモ
- フック: 「4GBのメモリでAIが動く時代」
- ターゲット: モバイルユーザー、低スペックPC勢
- 英語参考: https://www.youtube.com/watch?v=EXB8HokGVMI

### 企画7: 「Claude Codeを無料で使う方法【Ollama連携】」
- 形式: チュートリアル（10〜15分）
- 内容: Claude Code + Ollamaセットアップ、ローカルモデルでのコーディング、API課金ゼロの実現
- フック: 「Anthropicに月額払わずにClaude Codeを使う裏技」
- ターゲット: プログラマー、AI開発者
- 英語参考: https://www.youtube.com/watch?v=-V8fWL3oXTQ

### 企画8: 「【完全比較】Ollama vs LM Studio vs GPT4All vs Jan - どれが最強？」
- 形式: 比較レビュー（15〜20分）
- 内容: インストール簡易度、UI、対応モデル、速度、メモリ使用量、拡張性の6軸評価
- フック: 「ローカルAI初心者が最初に選ぶべきツール」
- ターゲット: ローカルAI入門者
- 英語参考: https://www.youtube.com/watch?v=XNUHOZM5gZU

### 企画9: 「自分だけのAIに学習させる！2026年版ファインチューニング入門」
- 形式: チュートリアル（20〜25分）
- 内容: Unsloth + LoRA/QLoRAでの効率的ファインチューニング、GRPO新手法の紹介、Ollamaでの利用
- フック: 「専門知識を教え込んだ自分専用AIを作る」
- ターゲット: 中級〜上級者
- 英語参考: https://www.youtube.com/watch?v=pTaSDVz0gok

### 企画10: 「Raspberry Pi 5でAIを動かす！AI HAT+ 2レビュー」
- 形式: ハードウェアレビュー + チュートリアル（12〜15分）
- 内容: AI HAT+ 2開封、Hailo 10Hの性能、物体検出・音声認識デモ、DeepSeek R1 on Pi
- フック: 「1万円台でAIエッジデバイスが作れる」
- ターゲット: Raspberry Piユーザー、IoT勢
- 英語参考: https://www.youtube.com/watch?v=A6RARLQ0hhU

### 企画11: 「RAGは死んだのか？1Mコンテキスト時代の最適解を検証」
- 形式: 解説 + 実験（15〜18分）
- 内容: RAG vs ロングコンテキスト比較実験、ローカルRAGパイプライン構築（ChromaDB + Ollama）
- フック: 「100万トークンのコンテキストがあればRAGは不要？」
- ターゲット: エンジニア、AI開発者
- 英語参考: https://www.youtube.com/watch?v=jdknLDkBS3k

### 企画12: 「【ローカルAI動画生成】ComfyUI + WAN 2.2で無料4K動画を作る」
- 形式: チュートリアル（15〜20分）
- 内容: ComfyUI App Viewの新UI解説、WAN 2.2 / LTX-2.3モデル導入、RTX Video Super Resolution活用
- フック: 「Soraに月額払わずにAI動画を作る」
- ターゲット: 動画クリエイター、YouTuber
- 英語参考: https://www.youtube.com/watch?v=CfdyO2ikv88

### 企画13: 「DeepSeek V4をローカルで動かす完全ガイド」
- 形式: チュートリアル（12〜15分）
- 内容: DeepSeek V4-Flashのローカル展開、量子化オプション比較、日本語コーディング性能テスト
- フック: 「中国発の最強オープンAIを自宅で動かす」
- ターゲット: AI開発者、コーダー

### 企画14: 「ローカルAIで自分のPDFと会話する方法【AnythingLLM vs Open WebUI】」
- 形式: 比較チュートリアル（12〜15分）
- 内容: ドキュメントRAG機能比較、セットアップ手順、日本語PDF処理テスト
- フック: 「社内文書をAIに読ませて質問できる」
- ターゲット: ビジネスユーザー、研究者
- 英語参考: https://www.youtube.com/watch?v=Y2orG8z1EDg

### 企画15: 「【n8n × Ollama】ローカルAIで業務自動化する方法」
- 形式: チュートリアル（15〜20分）
- 内容: n8n + Ollamaでのメール自動返信、データ抽出、レポート生成のワークフロー構築
- フック: 「API課金ゼロの業務自動化AIを作る」
- ターゲット: ビジネスユーザー、フリーランス
- 英語参考: https://www.youtube.com/watch?v=-xtFw5f-UPI

---

## 補足: 2026年ローカルAI市場のキーファクト

- **Ollama**: GitHubスター10万突破、ローカルLLMのデファクトスタンダード
- **Llama 4 Scout**: 109B MoE (17B active)、10Mコンテキスト、RTX 3090一枚で動作
- **DeepSeek V4**: 2026年4月24日リリース、Pro (1.6T) / Flash (284B) の2バリアント
- **Gemma 4**: コンシューマハードウェアで85 t/s、Google発オープンソース
- **RTX 3090**: 2026年ローカルAIの最適GPUは依然として中古RTX 3090（$700-800）
- **SLMトレンド**: 本番ユースケースの80%はラップトップで動くモデルで十分、コスト95%削減
- **YouTube AI Slop対策**: 低品質AI動画のトラフィック5.44x減少、16チャンネル・47億再生がBAN

---

## 調査で使用した主要ソース

- [I Tested 11 Best Local LLMs (April 2026)](https://www.youtube.com/watch?v=SLtKGhOXamQ)
- [How to Setup OpenClaw with Ollama (2026)](https://www.youtube.com/watch?v=mc4qgknN-90)
- [Local AI Agents In 26 Minutes](https://www.youtube.com/watch?v=M-NTwkM3VwM)
- [Build 100% Self-Hosted AI Agents in 2026](https://www.youtube.com/watch?v=lityEZwmv5Q)
- [I Built a 36TB NAS + Local AI Server](https://www.youtube.com/watch?v=JdMntrGUTmw)
- [Claude Code + Ollama = FULL LOCAL AI AGENT](https://www.youtube.com/watch?v=7kNz_6hKHVs)
- [Raspberry Pi 5 on Steroids: 40 TOPS](https://www.youtube.com/watch?v=A6RARLQ0hhU)
- [Is RAG Dead in 2026?](https://www.youtube.com/watch?v=jdknLDkBS3k)
- [Small Language Models: The New 4GB Champion](https://www.youtube.com/watch?v=wQxawC3sv68)
- [The Rise of Small Language Models in 2026](https://www.youtube.com/watch?v=8-Wp2isplpc)
- [Ollama vs LM Studio vs GPT4All vs Jan (2026)](https://www.youtube.com/watch?v=XNUHOZM5gZU)
- [LM Studio vs AnythingLLM (2026)](https://www.youtube.com/watch?v=xllWnjqAeog)
- [How to USE Claude Code for FREE with Ollama](https://www.youtube.com/watch?v=-V8fWL3oXTQ)
- [Suddenly Local AI Is Impossible to Ignore](https://www.youtube.com/watch?v=BNL5k84CIAg)
- [Google Gemma 4 Tutorial - Run AI Locally for Free](https://www.youtube.com/watch?v=7LEvSOiTWZk)
- [Host a Private AI Server at Home with Proxmox Ollama and OpenWebUI](https://www.youtube.com/watch?v=y5-6qww8uKk)
- [How to Install LM Studio on Windows 11 (2026)](https://www.youtube.com/watch?v=uTLaZPImhYM)
- [Ollama vs LM Studio (2026)](https://www.youtube.com/watch?v=2M7zll7Io-0)
- [ComfyUI + WAN 2.2 Best FREE AI Video](https://www.youtube.com/watch?v=CfdyO2ikv88)
- [How To Use LTX-2.3 in ComfyUI](https://www.youtube.com/watch?v=W-PIgkRWJOc)
- [AnythingLLM vs Open WebUI Comparison 2026](https://www.youtube.com/watch?v=Y2orG8z1EDg)
- [EASIEST Way to Fine-Tune a LLM and Use It With Ollama](https://www.youtube.com/watch?v=pTaSDVz0gok)
- [A new way to fine-tune LLMs just dropped (GRPO)](https://www.youtube.com/watch?v=lLkE9w1NJs0)
- [2026年のローカルLLM事情を整理してみた | DevelopersIO](https://dev.classmethod.jp/articles/local-llm-guide-2026/)
