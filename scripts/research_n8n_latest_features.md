# n8n 最新機能・アップデート調査（2026年）

調査日: 2026-04-20
調査対象: n8n v2.0〜v2.18.5（2025年12月〜2026年4月の全アップデート）

---

## 2026年の主要アップデート一覧

### 1. n8n 2.0 リリース（2025年12月 → 2026年本格普及）
- **Publish / Save の分離**: ワークフローの「保存」と「デプロイ（公開）」が分離。下書きを安全に編集可能に
- **Task Runners（タスクランナー）**: Code ノードの実行が隔離環境（コンテナ）で行われるようになりデフォルト有効化。セキュリティが大幅強化
- **サブワークフローのデータ返却改善**: Wait ノードを含むサブワークフローから親ワークフローへデータを正しく返却可能に（1.xでは不可能だった）
- **ベースラインメモリ33MB削減**: パフォーマンス向上
- **UIリデザイン**: モダンでクリーンなデザインに刷新

### 2. Autosave（自動保存）機能 - v2.4.0（2026年1月）
- n8n史上最もリクエストされた機能がついに実現
- 2秒ごとに変更を自動保存
- **同時編集保護（Concurrency Protection）**: 他のユーザーが編集中のワークフローを開くと読み取り専用モードで表示
- 環境変数 `N8N_WORKFLOWS_AUTOSAVE_DISABLED` で無効化も可能

### 3. Human-in-the-Loop（HITL）for AI Tool Calls（2026年1月）
- AI エージェントがツールを実行する前に、人間の承認を必須にできる「ゲート付きツール」機能
- ツールレベルで承認を設定（ワークフローレベルではない）
- Slack、Telegram、n8n Chat など任意のチャネルで承認リクエストを受信可能
- 承認画面にはツール名、パラメータ、AIの理由が表示される
- Chat ノードに新アクション「Send a message」「Send a message and wait」追加

### 4. MCP（Model Context Protocol）サーバー機能
- n8n インスタンスを MCP サーバーとして公開可能
- Claude Desktop、Claude Code、Cursor、Windsurf などの AI クライアントから直接ワークフローを構築・管理
- **ワークフロー自動生成**: テキストプロンプトからワークフローを自動構築、バリデーション、テスト実行まで可能
- MCP Client Tool ノード: 外部 MCP サーバーのツールを n8n エージェントから呼び出し可能
- MCP Server Trigger ノード: n8n をMCPサーバーとして公開するエントリポイント
- v2.18.4 以上推奨

### 5. ワークフローバージョン履歴 & 差分比較
- バージョン履歴から任意の2バージョンを選択して並べて比較
- 変更されたノードがハイライト表示
- 各バージョンに変更数バッジ表示
- ノードをクリックするとJSON差分が表示（Cloud Pro以上）

### 6. セキュリティ & ポリシー設定（Security & Policies）
- 新しい「Security & policies」設定セクション
- 管理者がパーソナルスペースでのワークフロー/クレデンシャル共有を制御可能
- パーソナルスペースからのワークフロー公開を制御可能
- Enterprise プラン向け

### 7. 1Password 外部シークレットプロバイダー対応
- 1Password Connect Server が外部シークレットプロバイダーとして追加
- HashiCorp Vault、AWS Secrets Manager、Azure Key Vault、GCP Secret Manager に次ぐ5番目のプロバイダー
- シークレットはランタイム時にフェッチされ、n8n には保存されない
- **プロジェクトスコープシークレット**: プロジェクト管理者が独自のVault接続を管理可能

### 8. Alibaba Cloud Chat Model ノード（新規追加）
- DashScope の OpenAI 互換 API を使用した LangChain サブノード
- デフォルトモデル: qwen-plus
- 動的モデルロード対応
- v2.18.0 で AI Gateway 互換性の修正も追加

### 9. Microsoft Agent 365 Trigger ノード
- n8n エージェントを Microsoft Teams、Outlook、Word、SharePoint 内に「チームメンバー」として表示
- Zendesk 等の外部サービスと組み合わせた企業向けエージェント構築が可能
- v2.16.0 でウェルカムメッセージ修正

### 10. OpenAI ノード V2（Responses API 対応）
- v1.117.0 で OpenAI Node V2 リリース
- OpenAI Responses API をネイティブサポート
- Assistants API のサポートは廃止予定（2026年8月26日まで）
- 新オペレーション「Generate a Model Response」追加
- Web Search、File Search、Code Interpreter、MCPサーバー等のOpenAIツール対応
- ハードコードされたモデル名を動的選択（RLC）に置き換え

### 11. Evaluations（AI ワークフロー評価機能）
- AI ワークフローをデプロイ前にテストデータでテスト可能
- Light Evaluations: 手動選定テストケースでの開発時評価
- Metric-based Evaluations: 大規模データセットでのスコアリング/メトリクス
- 正確性、毒性、バイアス、ツール選択の正確性など任意のメトリクスを定義可能
- v1.95.1 以上で利用可能

### 12. Convert to Sub-workflow（サブワークフロー変換）
- キャンバス上のノードを選択 → 右クリック → 「Convert to sub-workflow」
- 大規模ワークフローを再利用可能なコンポーネントに分割
- ワンクリックでサブワークフロー化

### 13. Data Tables（ビルトインデータテーブル）
- n8n 内部にテーブル形式でデータを保存・管理
- 外部データベース不要で永続データを保持
- デフォルト50MB制限（セルフホストでは変更可能）
- 重複排除、レートリミット、キュー管理、キャッシュなどに活用

### 14. SSRF保護
- アウトバウンド HTTP リクエストのホスト/IPレンジ検証
- DNSリバインディング防止
- リダイレクト先も検証対象

### 15. セキュリティ修正（重要 CVE 対応）
- **CVE-2026-21858**: CVSS 10.0 の未認証 RCE 脆弱性。全世界約10万サーバーに影響。v1.121.0 で修正済み
- **CVE-2026-25049**: 認証済みユーザーによる任意コマンド実行（CVSS 9.9）
- **CVE-2026-33660**: Merge ノードの SQL インジェクション経由 RCE
- 2026年2月6日にセキュリティバレティン公開（8件のCVE対応）

### 16. その他の注目アップデート
- Notion OAuth サポート追加
- LinkedIn ノード API バージョン更新
- Schedule ノードのミスされたトリガー自動回復
- Zendesk Trigger ノード（Webhook署名検証付き）
- GitHub Actions 経由のコミュニティノード公開サポート
- Prometheus カウンター（トークン交換用）
- デプロイキー管理機能
- ロールセレクターの改善（ビルトインロールとカスタムロールの分離表示）

---

## 各アップデートの動画ネタ化ポイント

| 機能 | 動画タイプ | 想定再生数ポテンシャル | キーワード需要 |
|------|-----------|----------------------|--------------|
| n8n 2.0 全体紹介 | 総合レビュー | 高（既に競合動画あり） | 高 |
| MCP サーバー + Claude | チュートリアル | 非常に高 | 急上昇中 |
| Human-in-the-Loop | ハンズオン | 高 | 中〜高 |
| Autosave + 同時編集保護 | Tips紹介 | 中 | 中 |
| OpenAI Responses API V2 | 移行ガイド | 高（期限あり:8月） | 高 |
| Data Tables | チュートリアル | 中〜高 | 中 |
| Evaluations | 上級者向け | 中 | 低〜中 |
| Microsoft Agent 365 | エンタープライズ向け | 中 | 中 |
| Alibaba Cloud ノード | ニッチ | 低〜中 | 低 |
| セキュリティ CVE 解説 | ニュース/警告 | 高（緊急性） | 高 |
| Convert to Sub-workflow | Tips | 低〜中 | 低 |
| Task Runners 解説 | セキュリティ | 中 | 中 |
| 1Password シークレット | エンタープライズ | 低〜中 | 低 |
| バージョン差分比較 | Tips | 低 | 低 |
| SSRF 保護設定 | セキュリティ | 低〜中 | 低 |

---

## まだ誰も動画にしていない（少ない）新機能

### 1. MCP サーバーでワークフロー自動構築（日本語コンテンツほぼゼロ）
- Claude Desktop / Claude Code から n8n ワークフローを自然言語で構築
- 「Vibe Coding」ならぬ「Vibe Automating」のコンセプト
- 英語圏でも解説動画はまだ少ない。日本語ではほぼ皆無

### 2. Human-in-the-Loop のゲート付きツール（日本語解説なし）
- AI エージェントの危険なツール実行に人間の承認を入れる
- 企業利用で必須となる安全性機能
- 実践的なデモが映える

### 3. Evaluations（AI ワークフロー評価）
- AI ワークフローの品質を定量的にテストする機能
- GPT-4 vs Claude vs Llama の比較テストが可能
- 開発者向けだが、実用的な動画にすれば需要あり

### 4. OpenAI Node V2 + Responses API への移行ガイド
- 2026年8月26日までに Assistants API から移行必須
- 期限付きのため「今すぐ見るべき」訴求が可能
- 具体的な移行手順の動画は少ない

### 5. Microsoft Agent 365 連携
- n8n エージェントを Teams/Outlook に常駐させる
- エンタープライズ向けだが、デモとしてインパクト大

### 6. n8n セキュリティ脆弱性と対策（CVE-2026-21858）
- CVSS 10.0 のクリティカル脆弱性
- セルフホストユーザーへの緊急警告コンテンツ
- 日本語での解説は非常に少ない

---

## emperor_ch が最速で紹介すべき機能 TOP5

### 第1位: n8n MCP サーバー × Claude で「Vibe Automating」
**理由**: 
- AI でワークフローを自動生成する革命的機能
- 日本語コンテンツがほぼ存在しない = 先行者利益が最大
- Claude Desktop / Claude Code ユーザーの急増と合致
- 「自然言語だけで n8n ワークフローを作る」は強力なフック
- 動画タイトル案: 「Claude に n8n ワークフローを全自動で作らせる方法【MCP サーバー】」

### 第2位: OpenAI Responses API 移行ガイド（期限: 2026年8月）
**理由**:
- 2026年8月26日の Assistants API 廃止に向けた期限付きコンテンツ
- 既存ユーザーが「今すぐ」必要とする実用情報
- SEO 的に「n8n OpenAI 移行」で検索される可能性大
- 動画タイトル案: 「【期限あり】n8n OpenAI ノード V2 への移行方法 - Responses API 完全解説」

### 第3位: Human-in-the-Loop（AI エージェント承認フロー）
**理由**:
- AI エージェントの安全性は2026年最大のテーマ
- 「AI に勝手にメール送信させない」等の実用的なデモが映える
- 企業利用を考える視聴者に刺さる
- Slack/Teams と組み合わせた実践デモが作りやすい
- 動画タイトル案: 「n8n AI エージェントに "承認" を入れる方法【Human-in-the-Loop】」

### 第4位: n8n セキュリティ緊急警告（CVE-2026-21858）
**理由**:
- CVSS 10.0 = 最高レベルの危険度
- セルフホストユーザーへの緊急性がある
- 「あなたの n8n は安全ですか？」という強力なフック
- ニュース系コンテンツは初速が出やすい
- 動画タイトル案: 「【緊急】n8n に重大脆弱性 - セルフホストユーザーは今すぐアップデート」

### 第5位: n8n Data Tables + Evaluations で本格AIエージェント
**理由**:
- Data Tables（ビルトインDB）と Evaluations（AI テスト）を組み合わせた実践コンテンツ
- 「外部DB不要で n8n だけで完結する」訴求が強い
- AI ワークフローの品質テスト方法は日本語でほぼ解説なし
- 動画タイトル案: 「n8n だけで完結！ビルトイン DB + AI テスト機能で本格エージェント構築」

---

## 補足: 2026年の n8n エコシステム動向

- **GitHub Stars**: 180,000+ (急成長中)
- **資金調達**: シリーズ B & C で評価額 $1B（ユニコーン企業）
- **統合数**: 400+ 公式ノード、600+ コミュニティノード
- **最新バージョン**: v2.18.5（2026年4月27日時点）
- **主要競合**: Make (Integromat)、Zapier、Power Automate
- **2026年ロードマップ**: AI ワークフローの最前線維持、スケーラビリティ向上、エンタープライズ機能強化

---

## Sources

- [n8n Release Notes](https://docs.n8n.io/release-notes/)
- [n8n GitHub Releases](https://github.com/n8n-io/n8n/releases)
- [Introducing n8n 2.0](https://blog.n8n.io/introducing-n8n-2-0/)
- [n8n MCP Server Blog](https://blog.n8n.io/n8n-mcp-server/)
- [n8n Human-in-the-Loop Docs](https://docs.n8n.io/advanced-ai/human-in-the-loop-tools/)
- [n8n Evaluations Docs](https://docs.n8n.io/advanced-ai/evaluations/overview/)
- [n8n Autosave Announcement](https://blog.n8n.io/announcing-autosave/)
- [n8n Data Tables Docs](https://docs.n8n.io/data/data-tables/)
- [n8n v2.0 Breaking Changes](https://docs.n8n.io/2-0-breaking-changes/)
- [n8n Security Bulletin Feb 2026](https://community.n8n.io/t/security-bulletin-february-6-2026/261682)
- [CVE-2026-21858 Research](https://www.cyera.com/research/ni8mare-unauthenticated-remote-code-execution-in-n8n-cve-2026-21858)
- [n8n Microsoft Agent 365 Blog](https://blog.n8n.io/n8n-expands-whats-possible-in-enterprise-automation-with-microsoft-agent-365/)
- [OpenAI Node V2 Migration Guide](https://blog.nocodecreative.io/n8n-openai-node-responses-api/)
- [n8n 2026 Roadmap Livestream](https://www.youtube.com/watch?v=djELnQmZmN0)
- [n8n Guide 2026](https://hatchworks.com/blog/ai-agents/n8n-guide/)
- [Releasebot n8n Updates](https://releasebot.io/updates/n8n)
