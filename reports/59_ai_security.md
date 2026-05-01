# AI x セキュリティ・プライバシー調査
日付: 2026-05-01

---

## 英語圏で話題のAIセキュリティテーマ（2026年トレンド）

### 1. AIボイスクローン詐欺の爆発的増加
- アメリカ人の10人に1人がAIボイスクローン詐欺を経験済み（McAfee調査）
- たった3秒の音声データで声をクローン可能、コスト0ドル・所要時間30分
- 被害者の77%が金銭被害、36%が$500〜$3,000の損失
- 家族の「合言葉（セーフワード）」が最も有効な防御策として急浮上
- 参考: https://www.investigatetv.com/2026/04/20/deepfake-scams-infiltrate-social-media-voice-cloning-becomes-easier/

### 2. AIフィッシングの進化（検知不可能レベルへ）
- フィッシングキャンペーンの86%にAIが関与（KnowBe4調査）
- AIが5分でフィッシングメール作成 vs 人間の16時間（192倍の効率化）
- AIフィッシングは人間の精鋭レッドチームより24%高い成功率
- YouTube CEO偽動画を使ったクリエイター標的フィッシングが大流行
- 参考: https://www.theregister.com/2026/04/30/modern_phishing_campaigns_ai/

### 3. AIエージェントのセキュリティ危機
- 企業の97%が「1年以内にAIエージェント起因のセキュリティ事故が起きる」と予想
- 88%の組織が過去1年にAIエージェント関連のインシデントを経験
- 49%の組織がAIエージェント間通信を全く監視できていない
- 87%が「AIエージェントは人間従業員より大きなインサイダー脅威」と認識
- 参考: https://securityboulevard.com/2026/04/97-of-enterprises-expect-a-major-ai-agent-security-incident-within-the-year/

### 4. Vibe Coding（AI自動コーディング）のセキュリティ負債
- 2026年3月だけで35件のCVE（脆弱性）がAIコーディングツールに起因
- AIが生成したコードの45%にOWASP Top 10脆弱性が含まれる
- Lovable（$6.6B企業）がAPIの基本的欠陥で48日間全ユーザーのソースコード・DB資格情報を公開
- 参考: https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/

### 5. AI彼女アプリの大規模データ漏洩
- MyLovely.AIから106,271人分のデータ漏洩（NSFWプロンプト113,000件含む）
- AI companion appの50%以上が親密なチャット履歴を脆弱性で露出
- 150Mインストールのアプリ群が「プライバシーの大惨事」と研究者が警告
- 恐喝・ブラックメールのリスクが深刻
- 参考: https://www.helpnetsecurity.com/2026/04/09/mylovely-ai-data-breach-user-conversations/

### 6. プロンプトインジェクション攻撃の実害化
- Google調査で2025年11月〜2026年2月に悪意あるプロンプトインジェクション試行が32%増加
- 研究者がin-the-wildで10種類の間接プロンプトインジェクション攻撃を発見
- YouTubeトランスクリプトに悪意ある指示を埋め込む手法も確認
- 英NCSCが「重大リスク」、米NISTが「生成AIの最大のセキュリティ欠陥」と指定
- 参考: https://security.googleblog.com/2026/04/ai-threats-in-wild-current-state-of.html

### 7. AIパスワードクラッキング
- PassGAN（GAN）が一般的なパスワードの51%を1分以内に解読
- 全体の85.6%が10秒以内に突破可能
- 16文字以上のパスワードなら解読に数兆年
- 参考: https://blog.jazzcybershield.com/ai-hacking-2026-real-examples/

### 8. AIマルウェアの進化
- 2026年1月時点で新規マルウェアサンプルの37%にAI/ML最適化の痕跡
- ポリモーフィックAIマルウェア：実行中にAPI経由で悪意あるコードを動的生成
- AIが生成したYouTubeチュートリアル動画でinfostealerマルウェアを配布する手口が横行
- 参考: https://www.securityweek.com/cyber-insights-2026-malware-and-cyberattacks-in-the-age-of-ai/

### 9. ChatGPTプライバシーリスク
- ChatGPTへの従業員入力の34.8%が機密データ（2023年の11%から急増）
- 写真アップロードで位置情報・顔特徴がトレーニングデータに
- 2025年に検索エンジンが数千のChatGPT会話リンクをインデックス化した事例
- 参考: https://www.eset.com/blog/en/home-topics/cybersecurity-protection/is-chatgpt-safe-2026-guide/

### 10. AIソーシャルエンジニアリングの高度化
- AIが被害者のSNS・漏洩データを分析し超個別化された攻撃を自動生成
- リアルタイムでトーン・言語・内容を調整する適応型攻撃
- 北朝鮮のAI偽造経歴によるリモート開発者なりすまし浸透が実際に発生
- 参考: https://www.eccu.edu/blog/social-engineering-attacks-generative-ai-2026/

---

## 日本語でまだカバーされていないテーマ

日本語YouTubeの調査結果から、以下のテーマは英語圏で大きな話題だが日本語ではほぼ未カバー:

| # | テーマ | 英語圏の状況 | 日本語の状況 |
|---|--------|------------|------------|
| 1 | **Vibe Codingのセキュリティ負債** | CVE急増・大手サービスの事故が多数報道 | 日本語での解説動画はほぼ皆無 |
| 2 | **AIエージェントのセキュリティ危機** | OWASP Top 10 for Agentic Apps発表、97%が事故予想 | 日本語で具体的なリスク解説をしているYouTubeなし |
| 3 | **AI彼女アプリの大規模データ漏洩** | MyLovely.AI等の具体的事故が連日報道 | 日本語メディアでの報道・動画ほぼなし |
| 4 | **ボイスクローン詐欺の「家族合言葉」対策** | 英語圏で最も話題の具体的対策 | 日本語では「オレオレ詐欺のAI版」程度の言及のみ |
| 5 | **プロンプトインジェクションのin-the-wild実例** | Google公式ブログで報告、YouTubeトランスクリプト攻撃も | 日本語では概念説明のみで実例紹介が不足 |
| 6 | **AIレッドチーミングツール比較** | Garak vs Giskard vs PyRIT等の比較動画が人気 | 日本語でのツール比較コンテンツなし |
| 7 | **YouTube CEO偽動画フィッシング** | 具体的手口と被害事例が詳細に報道 | 日本語での注意喚起記事はあるがYouTube動画なし |
| 8 | **AIパスワードクラッキングの実演** | PassGANの実演動画が人気 | 日本語でのAIパスワード解読実演は見当たらない |
| 9 | **ポリモーフィックAIマルウェア** | 自己変異型AIマルウェアの解説が増加 | 日本語での解説コンテンツなし |
| 10 | **ChatGPTに写真を上げるリスク** | メタデータ・顔認識トレーニングリスクが話題 | 日本語での具体的警告コンテンツ不足 |

---

## 「不安煽り→対策提示」フォーマット

### パターンA: 数字インパクト型
```
不安煽り: 「AIがあなたの声を3秒でコピーします。10人に1人が被害に遭っています」
対策提示: 「家族だけの合言葉を決めてください。それだけで防げます」
```

### パターンB: 実演デモ型
```
不安煽り: 「あなたのパスワード、AIなら10秒で解読できます【実演】」
対策提示: 「16文字以上にするだけで数兆年かかります。今すぐ変更を」
```

### パターンC: 身近な恐怖型
```
不安煽り: 「ChatGPTに写真を送っていませんか？あなたの顔がAIのトレーニングに使われているかもしれません」
対策提示: 「設定画面から3タップでオフにできます」
```

### パターンD: 業界暴露型
```
不安煽り: 「AI彼女アプリが10万人分の"秘密の会話"を漏洩。あなたの恥ずかしいプロンプトが全世界に公開される日」
対策提示: 「使ってはいけないアプリ一覧と、安全なアプリの見分け方」
```

### パターンE: 最新事件型
```
不安煽り: 「AIが書いたコードに脆弱性。66億ドル企業が48日間データダダ漏れ」
対策提示: 「AI生成コードを使うとき、最低限チェックすべき3つのポイント」
```

---

## emperor_ch用の動画企画15個

### 企画1: 「AIがあなたの声を3秒でコピーする時代。家族を守る"たった一つの合言葉"」
- **フォーマット**: 不安煽り → 実演 → 対策
- **内容**: AI音声クローンの実演（3秒の音声から生成）→ 実際の詐欺事例（米国の10人に1人が被害）→「家族セーフワード」の設定方法を具体的に解説
- **差別化**: 日本語でAIボイスクローンの具体的対策を提示している動画がない
- **想定再生数**: 高（不安 + 具体的対策 + 家族向け）

### 企画2: 「あなたのパスワード、AIは10秒で解読する【実演あり】」
- **フォーマット**: 実演デモ → 数字インパクト → 対策
- **内容**: PassGANによるパスワード解読の実演 → 85.6%が10秒で突破される現実 → 16文字パスワードで数兆年に変わる
- **差別化**: 日本語でのAIパスワードクラッキング実演がない
- **想定再生数**: 高（実演系は再生数が伸びる）

### 企画3: 「ChatGPTに写真を送るな。あなたの顔がAIに食べられている」
- **フォーマット**: 身近な恐怖 → 具体的リスク → 設定変更手順
- **内容**: ChatGPTへの写真アップロードリスク（メタデータ・顔認識トレーニング）→ 従業員の34.8%が機密データを入力 → プライバシー設定の変更手順
- **差別化**: 日本語でChatGPTの写真リスクを具体的に警告する動画がない
- **想定再生数**: 非常に高（ChatGPT利用者が多く、身近な恐怖）

### 企画4: 「AI彼女アプリが10万人の秘密を漏洩した事件の全貌」
- **フォーマット**: 事件解説 → リスク分析 → 安全な使い方
- **内容**: MyLovely.AIの106,271人データ漏洩事件 → 113,000件のNSFWプロンプトが流出 → AI companionアプリの50%以上が脆弱 → 安全なアプリの見分け方
- **差別化**: 日本語で全く報道されていない事件。恥ずかしさ要素で拡散性大
- **想定再生数**: 非常に高（スキャンダル系 + プライバシー恐怖）

### 企画5: 「YouTubeからチャンネルを盗む最新AI詐欺。CEO偽動画の手口を完全解説」
- **フォーマット**: 手口暴露 → 被害事例 → 防御策
- **内容**: YouTube CEOニール・モーハンのAI偽動画によるフィッシング → プライベート動画として共有 → 7日以内に対応しないと収益化停止と脅迫 → アカウント乗っ取り → 仮想通貨詐欺ライブ配信に悪用
- **差別化**: 日本語での注意喚起記事はあるがYouTube動画はない
- **想定再生数**: 高（YouTuberへの直接的脅威）

### 企画6: 「AIが書いたコードが危険すぎる。Vibe Codingの闇」
- **フォーマット**: 業界暴露 → 具体的事故 → チェックリスト
- **内容**: Vibe Codingとは何か → 2026年3月に35件のCVE → Lovable（66億ドル企業）の48日間データ漏洩事故 → AI生成コードの45%にOWASP脆弱性 → 最低限のセキュリティチェック方法
- **差別化**: 日本語でVibe Codingのセキュリティリスクを解説する動画が皆無
- **想定再生数**: 中〜高（プログラマー向けだが衝撃的数字）

### 企画7: 「AIフィッシングメールは人間より24%賢い。見分ける方法はあるのか」
- **フォーマット**: 比較実験 → 数字インパクト → 対策
- **内容**: AI vs 人間のフィッシングメール比較 → AIが5分 vs 人間16時間で作成 → 86%のフィッシングにAI関与 → 見分けるポイントと多要素認証の重要性
- **差別化**: AIフィッシングの「人間超え」データは日本語で未紹介
- **想定再生数**: 高（誰もがメールを使う）

### 企画8: 「AIエージェントが会社を破壊する日。97%の企業が恐れる新リスク」
- **フォーマット**: 近未来警告 → 具体的データ → 対策フレームワーク
- **内容**: AIエージェントとは → 97%が1年以内の事故を予想 → 49%がエージェント間通信を監視不能 → OWASP Top 10 for Agentic Apps解説 → 企業がとるべき対策
- **差別化**: 日本語でAIエージェントのセキュリティリスクを解説する動画がない
- **想定再生数**: 中（ビジネス層向け）

### 企画9: 「プロンプトインジェクション実演。AIを"乗っ取る"攻撃が実際に起きている」
- **フォーマット**: 実演 → in-the-wild事例 → 防御策
- **内容**: プロンプトインジェクションとは → Google公式の32%増加報告 → YouTubeトランスクリプトに悪意ある指示を埋め込む手法 → 10種類のin-the-wild攻撃実例 → RAGパイプラインへの影響
- **差別化**: 日本語では概念説明のみで実例紹介がほぼない
- **想定再生数**: 中〜高（技術者 + AI利用者）

### 企画10: 「ディープフェイクで保険を売られた女性。AIなりすまし被害の実態」
- **フォーマット**: 被害者ストーリー → 技術解説 → 自衛策
- **内容**: 米国で実際にAIディープフェイクで顔を使われて保険販売広告に出された女性の事例 → YouTube/Facebook/TikTokでの偽広告の実態 → YouTubeのLikeness Detection → 自分のデジタル肖像権を守る方法
- **差別化**: 実被害者の具体的ストーリーを日本語で紹介する動画がない
- **想定再生数**: 高（共感 + 恐怖）

### 企画11: 「AIレッドチーミング入門。AIの弱点を見つけて稼ぐ新職業」
- **フォーマット**: 職業紹介 → ツール比較 → 始め方
- **内容**: AIレッドチーミングとは → 2026年最もホットなサイバースキル → Garak vs Giskard vs PyRITツール比較 → OWASP Top 10攻撃ベクトル解説 → キャリアとしての可能性
- **差別化**: 日本語でAIレッドチーミングのツール比較やキャリア解説がない
- **想定再生数**: 中（ニッチだが成長分野）

### 企画12: 「AIジェイルブレイク最前線2026。ChatGPT・Claude・Grokの安全性を比較テスト」
- **フォーマット**: 比較テスト → ランキング → リスク解説
- **内容**: 2026年の主要AIモデルのジェイルブレイク耐性を比較 → 各モデルのガードレール突破方法 → なぜ完全な防御は不可能か → ユーザーとして知っておくべきリスク
- **差別化**: 日本語での複数AI比較ジェイルブレイクテスト動画がない
- **想定再生数**: 高（好奇心 + 比較系は人気）

### 企画13: 「Anthropicが自社AIを"危険すぎる"と判断してリリース延期した話」
- **フォーマット**: ニュース解説 → 技術的背景 → 考察
- **内容**: Anthropic Claude Mythosの存在がデータ漏洩で発覚 → 3,000件の未公開アセットが公開アクセス可能だった → セキュリティ懸念によるリリース延期 → AI企業の内部葛藤
- **差別化**: 日本語で深掘りされていないAI業界の内幕
- **想定再生数**: 中〜高（業界ゴシップ系）

### 企画14: 「AIマルウェアが自己変異する。ウイルス対策ソフトが効かない新世代の脅威」
- **フォーマット**: 技術解説 → 具体的数字 → 防御策
- **内容**: ポリモーフィックAIマルウェアとは → 実行中にAPIでコードを動的生成 → 2026年1月に新規マルウェアの37%がAI最適化済み → YouTubeの偽チュートリアル動画でinfostealer配布の手口 → 対策
- **差別化**: 日本語でポリモーフィックAIマルウェアを解説する動画がない
- **想定再生数**: 中〜高（技術的だが恐怖訴求可能）

### 企画15: 「SNSの投稿を3秒見るだけで詐欺に使われる。AIソーシャルエンジニアリングの恐怖」
- **フォーマット**: 手口解説 → 実例 → 防御策
- **内容**: AIがSNSプロフィール・投稿を分析し超個別化攻撃を自動生成 → リアルタイムでトーン調整する適応型攻撃 → 北朝鮮の偽エンジニアなりすまし事件 → デジタルフットプリントを減らす具体策
- **差別化**: AIソーシャルエンジニアリングの最新手口を日本語で詳しく解説する動画がない
- **想定再生数**: 高（SNS利用者全員が対象）

---

## 優先度ランキング（クリック率 x 差別化 x 制作しやすさ）

| 順位 | 企画 | クリック率 | 差別化 | 制作容易度 |
|------|------|-----------|--------|-----------|
| 1 | 企画3: ChatGPTに写真を送るな | S | A | A |
| 2 | 企画1: AI音声クローン+家族合言葉 | S | A | B |
| 3 | 企画4: AI彼女アプリ10万人漏洩 | S | S | A |
| 4 | 企画2: パスワード10秒解読 | A | A | B |
| 5 | 企画12: AIジェイルブレイク比較 | A | A | B |
| 6 | 企画5: YouTube CEO偽動画詐欺 | A | B | A |
| 7 | 企画10: ディープフェイクなりすまし被害 | A | A | A |
| 8 | 企画7: AIフィッシング人間超え | A | A | B |
| 9 | 企画15: SNS3秒で詐欺に使われる | A | A | A |
| 10 | 企画6: Vibe Codingの闇 | B | S | B |
| 11 | 企画14: 自己変異AIマルウェア | B | S | C |
| 12 | 企画9: プロンプトインジェクション実演 | B | A | B |
| 13 | 企画13: Anthropicリリース延期 | B | A | A |
| 14 | 企画8: AIエージェント企業破壊 | B | S | B |
| 15 | 企画11: AIレッドチーミング入門 | C | S | B |

---

## 主要参考ソース

- [Deepfake scams infiltrate social media - InvestigateTV](https://www.investigatetv.com/2026/04/20/deepfake-scams-infiltrate-social-media-voice-cloning-becomes-easier/)
- [Most phishing now uses AI - The Register](https://www.theregister.com/2026/04/30/modern_phishing_campaigns_ai/)
- [97% of Enterprises Expect AI Agent Security Incident - Security Boulevard](https://securityboulevard.com/2026/04/97-of-enterprises-expect-a-major-ai-agent-security-incident-within-the-year/)
- [Vibe Coding Security Debt: AI-Generated CVE Surge - CSA](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-generated-code-vulnerability-surge-2026/)
- [MyLovely.AI data breach - Help Net Security](https://www.helpnetsecurity.com/2026/04/09/mylovely-ai-data-breach-user-conversations/)
- [AI threats in the wild: Prompt injections - Google Security Blog](https://security.googleblog.com/2026/04/ai-threats-in-wild-current-state-of.html)
- [AI Scams 2026: Deepfake Calls, Fake CAPTCHAs & AI Phishing - YouTube](https://www.youtube.com/watch?v=9yk5Q8BXKOU)
- [Phishing in 2026: How AI Is Making Cyberattacks Nearly Impossible to Detect - YouTube](https://www.youtube.com/watch?v=zmsjGPP6Tjo)
- [YouTube expands AI deepfake detection to Hollywood - Hollywood Reporter](https://www.hollywoodreporter.com/business/digital/youtube-ai-deepfake-detection-tool-1236569593/)
- [Is ChatGPT safe? 2026 security & privacy guide - ESET](https://www.eset.com/blog/en/home-topics/cybersecurity-protection/is-chatgpt-safe-2026-guide/)
- [Cyber Insights 2026: Malware in the Age of AI - SecurityWeek](https://www.securityweek.com/cyber-insights-2026-malware-and-cyberattacks-in-the-age-of-ai/)
- [AI girlfriend apps privacy risk 2026 - Android Headlines](https://www.androidheadlines.com/2026/03/ai-girlfriend-apps-security-risk-2026-study.html)
- [Agentic AI Red Teaming: Hottest Cyber Skill of 2026 - YouTube](https://www.youtube.com/watch?v=SFOrnrxWTNw)
- [YouTube warns of AI-generated CEO phishing - BleepingComputer](https://www.bleepingcomputer.com/news/security/youtube-warns-of-ai-generated-video-of-its-ceo-used-in-phishing-attacks/)
- [Anthropic Mythos AI model leak - Fortune](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)
