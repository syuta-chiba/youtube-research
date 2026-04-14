# YouTube バズネタ発掘リサーチ

🌐 **公開URL**: https://syuta-chiba.github.io/youtube-research/

プログラミング・Web開発系YouTubeチャンネルの「チャンネル規模の割に異常に伸びている動画」を自動検出するリサーチツール。

## 機能

- **バズ率計算**: 再生数 ÷ 登録者数 でスコアリング（10倍以上 = 超バズ）
- **チャンネル管理**: URLまたはIDで手動追加 / キーワードで自動発見
- **差分チェック**: 2回目以降は新着のみ取得してAPI quota を節約
- **トレンド調査**: Claude AI がSNS・技術ブログのトレンドを収集（Anthropic APIキー必要）
- **AI企画案**: バズ動画 × トレンドデータからYouTube動画ネタを自動生成
- **CSV出力**: バズ動画・チャンネル一覧をダウンロード

## 使い方

1. **設定タブ** で YouTube Data API v3 キーを入力
2. **チャンネル管理タブ** でチャンネルを追加（初回は9チャンネルがプリセット済み）
3. **ダッシュボード** の「調査開始」を押す

## API

- [YouTube Data API v3](https://console.cloud.google.com/) — 無料枠 10,000 quota/日
- [Anthropic API](https://console.anthropic.com/) — トレンド調査・AI分析（任意）
