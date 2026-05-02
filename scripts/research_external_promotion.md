# n8n動画 外部プロモーション先・方法

> 登録者1,400人のチャンネルでは、YouTube検索とおすすめだけでは初動が弱い。
> 公開後48時間の外部流入ブーストがアルゴリズムへの最大のシグナルとなる。

---

## 1. Reddit（サブレディット一覧 + 投稿ルール）

Redditは正しく使えば無料プロモーションで最高品質のトラフィックソース。ニッチコミュニティからの視聴者は平均視聴時間・エンゲージメント率が高く、YouTubeアルゴリズムに強いシグナルを送る。

### ターゲットサブレディット一覧

| サブレディット | メンバー数 | 投稿形式 | 注意点 |
|---|---|---|---|
| **r/n8n** | 約100K | チュートリアル・ワークフロー共有OK | 最重要。動画内容の要約+リンクで投稿 |
| **r/selfhosted** | 300K+ | セルフホスト系ツールの紹介OK | n8nセルフホスト観点で投稿 |
| **r/homelab** | 大規模 | ホームラボ構成・ツール紹介 | 自動化ツールとしてn8nを紹介する文脈で |
| **r/nocode** | 約9K | ノーコードツールのチュートリアル | 「コード不要でAIエージェント構築」切り口 |
| **r/automation** | − | 自動化全般 | ワークフロー自動化の実例として |
| **r/ChatGPT** / **r/artificial** | 大規模 | AI活用事例 | n8n×AI連携の切り口で |
| **r/smallytchannel** | − | 小規模YouTuber相互支援 | フィードバック目的で投稿可 |

### Reddit投稿の鉄則

1. **10:1ルール**: 宣伝投稿1回につき、価値提供コメント/投稿を10回行う
2. **タイトルは釣りNG**: 正確かつ好奇心を刺激する表現を使う
3. **本文にValue First**: 動画リンクだけでなく、要約・ポイントをテキストで書く
4. **投稿タイミング**: 米国東部時間の午前8-10時（日本時間21-23時）が最もアクティブ
5. **各サブレディットのルールを必ず確認**: 自己宣伝禁止のサブレディットもある
6. **ブースターコメント厳禁**: 不自然な応援コメントはすぐバレて炎上する

### 投稿テンプレート（r/n8n向け）

```
タイトル: I built an AI Agent workflow with n8n that [具体的な成果] - here's how

本文:
Hey everyone! I've been working on [具体的なワークフロー] and wanted to share
what I learned.

**What it does:**
- [機能1]
- [機能2]
- [機能3]

**Key takeaways:**
- [学び1]
- [学び2]

I made a detailed walkthrough video if anyone's interested: [リンク]

Happy to answer any questions about the setup!
```

---

## 2. Twitter/X での拡散方法

### 基本戦略

1. **動画公開ツイート（公開直後）**
   - 動画の最も面白い部分を15-30秒に切り出してネイティブ動画として投稿
   - YouTubeリンクはリプライに貼る（ネイティブ動画の方がインプレッション高い）
   - ハッシュタグ: `#n8n` `#AI自動化` `#ノーコード` `#AIエージェント` `#ワークフロー自動化`

2. **スレッド投稿（公開後3-6時間）**
   - 動画の内容を5-7ツイートのスレッドにまとめる
   - 各ツイートに価値ある情報を含める
   - 最終ツイートでYouTubeリンクを貼る

3. **プロフィール最適化**
   - 固定ツイートをn8n動画の告知に変更
   - プロフィールにYouTubeチャンネルリンクを設定

### ハッシュタグ戦略

**英語タグ（グローバルリーチ）:**
`#n8n` `#nocode` `#automation` `#AIAgent` `#workflow` `#buildinpublic`

**日本語タグ（国内リーチ）:**
`#n8n` `#AI自動化` `#ノーコード` `#業務自動化` `#AIエージェント` `#ワークフロー自動化`

### エンゲージメント戦略

- n8n公式アカウント（@n8n_io）にメンション → リツイートされる可能性
- n8n関連の投稿に日常的にリプライ・引用RTして存在感を作る
- 動画公開前1週間から関連ツイートを投稿してフォロワーの期待を醸成

---

## 3. 技術ブログ連携（Qiita、Zenn、note）

### Qiita

- **YouTube埋め込み対応済み**（2021年3月のアップデート以降）
- 埋め込み方法: YouTubeの「共有」→「埋め込む」からembedコード取得
- **記事構成**: 動画の内容をテキスト記事として書き起こし、動画を埋め込む
- **タグ**: `n8n`, `AI`, `自動化`, `ノーコード`, `ワークフロー`
- **効果**: Google検索からのSEO流入 → 動画への導線

#### Qiita記事テンプレート

```
タイトル: 【n8n入門】○○を自動化するAIエージェントの作り方

## はじめに
（動画の導入部分をテキスト化）

## 完成するワークフロー
（スクリーンショット + YouTube埋め込み）

## ステップバイステップ解説
（動画の主要ステップをテキスト+画像で解説）

## まとめ
詳しい手順は動画で解説しています。
（YouTube埋め込み）
```

### Zenn

- n8nのトピックページが存在: `zenn.dev/topics/n8n`
- 既にn8n関連記事が多数投稿されており、読者層がマッチ
- **記事 or スクラップ形式**でチュートリアルを公開
- Zennは技術記事の質が高く、Google検索での上位表示が期待できる

### note

- n8n関連の記事が豊富に存在（AI自動化系が人気）
- **有料記事**にして動画では触れない追加Tipsを含める手法も有効
- noteはSEO力が強く、「n8n 使い方」等のキーワードで上位表示されやすい
- SNSシェア機能が充実しており、note内での拡散も期待できる

### ブログ記事のSEO効果

- YouTube動画を埋め込んだブログ記事はGoogle検索で**2倍以上**のキーワードでPage1にランクイン
- 動画埋め込みはページ滞在時間を増加させ、SEOシグナルを強化
- GoogleはYouTube埋め込みを他の動画プラットフォームより優遇する

---

## 4. n8n公式コミュニティへの投稿

### n8n Community Forum（community.n8n.io）

- **メンバー数**: 30,000人以上
- **カテゴリ**: 「Built with n8n」「Show and Tell」セクションが最適
- **投稿形式**: ワークフローの説明 + 動画リンク
- **ポイント**: ワークフローのJSONを共有すると反応が良い

### n8n Discord（discord.com/invite/n8n）

- **メンバー数**: 約78,000人
- **適切なチャンネル**: `#show-your-work` や `#general` で動画を共有
- **ポイント**: 短い説明+動画リンク。質問への回答も積極的に行う

### n8n公式ワークフローテンプレート

- n8n.io/workflows にワークフローテンプレートを投稿
- テンプレート説明に動画チュートリアルへのリンクを含める
- **最も効果的な手法の一つ**: ワークフローを探しに来たユーザーが直接動画に流入

### n8n日本語コミュニティ

- n8n Community Forum内に日本語セクションが存在（community.n8n.io/t/japanese-community/76905）
- 日本語での情報共有・質問が可能
- 日本のn8nユーザーへの直接リーチ

---

## 5. LinkedIn活用

### なぜLinkedInが有効か

- テック系チュートリアルとLinkedInの相性が良い
- 「業務効率化」「AI活用」は企業のLinkedIn担当者が反応するトピック
- 動画投稿のオーガニックリーチが他SNSより高い

### 投稿戦略

1. **テキスト投稿 + 動画リンク**
   - 冒頭にフック（「n8nで○○を自動化したら、作業時間が90%削減された」）
   - 箇条書きでポイントを3-5つ列挙
   - 最後にYouTubeリンク

2. **ネイティブ動画（30-60秒の切り抜き）**
   - 動画のハイライトをLinkedIn用に再編集
   - 字幕必須（多くのユーザーがミュートで閲覧）

3. **記事（LinkedIn Article）**
   - ブログ記事と同等の内容をLinkedIn Articleとして公開
   - YouTube動画を埋め込み可能

### ハッシュタグ

`#n8n` `#automation` `#nocode` `#AIagent` `#workflow` `#productivityhacks` `#techhacks`

---

## 6. その他の無料プロモーション先

### DEV Community（dev.to）

- n8n関連記事が多数存在（専用タグ: `dev.to/t/n8n`）
- テック系の読者層が最もマッチする英語プラットフォーム
- 記事にYouTube動画を埋め込み可能
- 投稿直後にコミュニティからのフィードバックが得られる

### Hacker News（news.ycombinator.com）

- **Show HN**形式で投稿可能（ただし条件あり）
  - 実際に動かせるもの（ワークフローテンプレート等）が必要
  - ブログ記事やチュートリアル動画単体はOff-topic
  - ユーザー名を会社/プロジェクト名にしない
  - ブースターコメント厳禁
- **現実的な活用法**: 動画ではなく、ワークフローテンプレートやGitHubリポジトリを投稿し、動画はリンクとして含める
- バズれば数千〜数万のトラフィック

### Facebook グループ

- **n8n Group**（facebook.com/n8ngroup）: n8n公式のFacebookコミュニティ
- ノーコード/ローコード系のFacebookグループ
- 自動化・AI活用系のグループ

### YouTube Shorts

- 動画のハイライトを60秒以内のShortsとして3-5本作成
- Shortsフィードは非登録者にもリーチする最強の無料ツール（2026年）
- Shorts → 長尺動画への導線を概要欄に設置

### Medium

- 英語記事を公開してグローバルリーチを獲得
- YouTube動画の埋め込みが可能
- 「n8n」「automation」「AI agent」タグで投稿

### はてなブックマーク

- 技術記事がバズりやすいプラットフォーム
- Qiita/Zenn記事をはてブに共有 → ホットエントリ入りで大量流入

### ProductHunt（将来的に）

- n8nワークフローをプロダクトとして公開する場合に有効
- 直接の動画プロモーションには不向きだが、ブランディングに貢献

---

## 7. 公開後48時間のプロモーションスケジュール

### 公開前（D-7〜D-1）

| タイミング | アクション |
|---|---|
| D-7 | Reddit（r/n8n等）で関連トピックにコメント・投稿して存在感を作る |
| D-5 | Twitter/Xでn8n関連ツイートを投稿、n8n公式アカウントと交流 |
| D-3 | 「近日公開」ティーザーツイート（サムネイル画像付き） |
| D-1 | YouTubeコミュニティ投稿で予告 |

### 公開日（D-Day）

| タイミング | アクション | 優先度 |
|---|---|---|
| 公開直後（0h） | YouTube動画を公開 | 必須 |
| +15分 | Twitter/Xに告知ツイート（ネイティブ動画クリップ+リンク） | 必須 |
| +30分 | r/n8nに投稿（要約+リンク+ワークフローJSON） | 必須 |
| +1時間 | n8n Community Forumに投稿 | 必須 |
| +1時間 | n8n Discordに投稿 | 必須 |
| +2時間 | LinkedIn投稿 | 高 |
| +3時間 | Twitter/Xスレッド投稿（動画内容の要約） | 高 |
| +4時間 | r/selfhosted, r/nocode等に投稿（各サブレディット向けに文面調整） | 高 |
| +6時間 | Facebook n8nグループに投稿 | 中 |

### 公開翌日（D+1）

| タイミング | アクション | 優先度 |
|---|---|---|
| 午前 | Qiita記事を公開（動画埋め込み） | 高 |
| 午前 | Zenn記事を公開（動画埋め込み） | 高 |
| 午後 | note記事を公開（動画埋め込み） | 中 |
| 午後 | DEV Community記事を公開（英語） | 中 |
| 夕方 | Twitter/Xで追加ツイート（別角度の切り口） | 中 |
| 夜 | Reddit投稿へのコメント返信・フォローアップ | 必須 |

### 公開2日目（D+2）

| タイミング | アクション | 優先度 |
|---|---|---|
| 午前 | YouTube Shorts 1本目を公開 | 高 |
| 午後 | Medium記事を公開（英語） | 中 |
| 夕方 | YouTube Shorts 2本目を公開 | 高 |
| 夜 | 全プラットフォームのコメント返信 | 必須 |

### D+3〜D+7（継続施策）

- YouTube Shorts を追加で2-3本公開（異なるハイライト）
- 各プラットフォームのコメント・質問への返信を継続
- n8n Communityで関連質問に回答（動画リンクを自然に含める）
- はてなブックマークでQiita/Zenn記事を共有

---

## 8. emperor_chの具体的アクションプラン

### 即日やること（動画公開前の準備）

- [ ] **Redditアカウント整備**: r/n8n, r/selfhosted, r/nocode に参加し、2-3件の価値あるコメントを投稿
- [ ] **n8n Community Forum**: アカウント作成（未登録なら）、既存スレッドに1-2件コメント
- [ ] **n8n Discord**: サーバーに参加（discord.com/invite/n8n）
- [ ] **Twitter/X**: n8n公式（@n8n_io）をフォロー、関連ツイートにいいね・リプライ
- [ ] **LinkedIn**: プロフィールに「n8n」「自動化」関連キーワードを追加

### 動画公開に合わせて準備するもの

- [ ] **15-30秒の切り抜き動画** x 3本（Twitter/LinkedIn用）
- [ ] **60秒YouTube Shorts** x 3本（異なるハイライト）
- [ ] **Reddit投稿文**: r/n8n用（英語）、要約+ワークフローJSON+動画リンク
- [ ] **Qiita記事の下書き**: 動画内容をテキスト化+YouTube埋め込み
- [ ] **Zenn記事の下書き**: 動画内容をテキスト化+YouTube埋め込み
- [ ] **note記事の下書き**: 日本語ユーザー向けに分かりやすく
- [ ] **DEV Community記事の下書き**: 英語で技術的に詳しく
- [ ] **n8nワークフローJSON**: 動画で作成したワークフローのエクスポート

### KPI（公開後1週間の目標）

| 指標 | 目標値 | 計測方法 |
|---|---|---|
| YouTube視聴回数 | 1,000回以上 | YouTube Analytics |
| 外部流入比率 | 30%以上 | YouTube Analytics > トラフィックソース |
| Reddit投稿のUpvote | 合計50以上 | Reddit |
| Qiita/Zenn記事のいいね | 各20以上 | 各プラットフォーム |
| 新規チャンネル登録者 | +50人以上 | YouTube Analytics |

### 最重要ポイント

1. **r/n8nへの投稿が最高ROI**: 10万人のn8nユーザーに直接リーチ
2. **ワークフローJSONの共有が鍵**: テンプレートを共有すると再現性が高く、コミュニティの反応が圧倒的に良い
3. **Qiita/Zennは長期SEO資産**: 公開直後だけでなく、数ヶ月〜数年にわたりGoogle検索からの流入を生む
4. **YouTube Shortsは非登録者リーチの最強ツール**: 2026年はShortsアルゴリズムが完了率を重視、3-5本/週が推奨
5. **全プラットフォームでコメント返信を徹底**: エンゲージメントが次のリーチを生む

---

## 参考リソース

- [20 Best Sites to Promote YouTube Videos in 2026](https://vidorange.com/blog/sites-to-promote-youtube-videos)
- [25 Ways to Promote Your YouTube Channel in 2026](https://vidorange.com/blog/ways-to-promote-your-youtube-channel)
- [YouTube Organic Promotion: 15 Free Strategies](https://vidorange.com/blog/youtube-organic-promotion)
- [n8n Community Forum](https://community.n8n.io/)
- [n8n Discord](https://discord.com/invite/n8n)
- [r/n8n Subreddit](https://gummysearch.com/r/n8n/)
- [Show HN Guidelines](https://news.ycombinator.com/showhn.html)
- [DEV Community n8n Tag](https://dev.to/t/n8n)
- [Zenn n8nトピック](https://zenn.dev/topics/n8n)
- [n8n Japanese Community](https://community.n8n.io/t/japanese-community/76905)
