# n8n動画 制作ツール・撮影環境ガイド

> 調査日: 2026-04-20
> 対象: n8n系スクリーンキャプチャ + ナレーション動画の制作環境

---

## 1. 画面録画ソフト比較

### 無料

| ソフト | OS | 特徴 | 向いている用途 |
|--------|-----|------|---------------|
| **OBS Studio** | Win/Mac/Linux | 業界標準。配信・録画両対応。カスタマイズ性が高い | 高品質録画、複数シーン切替 |
| **Screenize** | Mac | オープンソースのScreen Studio代替。自動ズーム・カーソルエフェクト付き | チュートリアル動画 |

### 有料

| ソフト | 価格帯 | 特徴 | 向いている用途 |
|--------|--------|------|---------------|
| **Screen Studio** | $29/月 or $108/年 | Mac専用。自動ズーム、カーソルスムージング、AIキャプション、4K出力。クリック時に自動で滑らかにズームイン | **n8n動画に最適** - 操作説明が自動で映える |
| **Camtasia** | 買い切り約$300 | 録画+編集一体型。ズーム・注釈・カーソルハイライト内蔵 | 初心者向けオールインワン |
| **FocuSee** | サブスク | AIパワーの自動ズーム・カーソル追跡・音声強化 | チュートリアル特化 |
| **Bandicam** | Win専用、買い切り約$40 | 軽量・高品質。ゲーム録画にも強い | Windows環境での録画 |

### n8n動画への推奨

- **Mac**: Screen Studio（自動ズーム+カーソルエフェクトがn8nのノード操作と相性抜群）
- **Windows/Linux**: OBS Studio（無料）+ 編集時にズーム追加
- **予算重視**: OBS Studio + 後述の編集ソフトで加工

### OBS推奨設定（チュートリアル録画用）

```
出力:
  録画フォーマット: MKV（クラッシュ時もファイル破損しない。後でMP4にリミックス可能）
  エンコーダ: x264 or ハードウェア(NVENC/AMF)
  レート制御: CRF 18-20（画質優先。ファイルサイズは大きくなるがチュートリアルなら問題なし）

映像:
  基本解像度: 1920x1080（モニター解像度）
  出力解像度: 1920x1080
  FPS: 30fps（チュートリアルは30fpsで十分。60fpsは不要）
  ダウンスケールフィルタ: Lanczos

音声:
  サンプルレート: 48kHz（YouTube推奨）
  ビットレート: 192kbps以上
```

---

## 2. 音声収録（マイク vs AI音声）

### 方法A: マイク収録（自分の声）

#### 推奨マイク

| マイク | 価格帯 | 接続 | 特徴 |
|--------|--------|------|------|
| **Audio-Technica AT2020USB+** | 約$100 | USB | コスパ最強。クリアな音質 |
| **Blue Yeti** | 約$130 | USB | 多指向性。定番 |
| **Rode NT-USB Mini** | 約$100 | USB | コンパクト。ノイズ少ない |
| **Shure MV7** | 約$250 | USB/XLR | プロ品質。ダイナミック型で環境音に強い |

#### マイク収録のコツ

- ポップフィルターを使う（破裂音「p」「b」の歪み防止）
- 口からマイクまで15-20cmの距離を保つ
- 静かな部屋で録音（エアコンOFF推奨）
- セクションごとに分割して録音（一気通貫は失敗しやすい）
- モニターヘッドホンで録音品質をリアルタイム確認
- 会話調の自然なトーンを意識する

### 方法B: AI音声（ナレーション生成）

#### 日本語AI音声ツール

| ツール | 価格 | 品質 | 特徴 |
|--------|------|------|------|
| **VOICEVOX** | **完全無料** | 高品質 | 商用利用可。ずんだもん等の人気キャラ。クレジット表記必要 |
| **ElevenLabs** | 無料枠あり/有料 | 最高品質 | 人間と区別困難なレベル。30+言語対応 |
| **Murf** | 有料 | 高品質 | 200+声、20+言語。ビジネス向け |
| **Clipchamp** | 無料(Microsoft) | 中-高 | 400声。ブラウザで完結。ピッチ・感情調整可 |
| **LOVO AI** | 有料 | 高品質 | YouTube特化の音声生成 |

#### VOICEVOX活用ガイド（無料で日本語ナレーション）

1. 公式サイト (https://voicevox.hiroshiba.jp/) からダウンロード
2. テキスト入力 → イントネーション調整 → WAV出力
3. キャラクター選択（ずんだもん、四国めたん等）
4. 各キャラの利用規約・クレジット表記ルールを確認
5. WAVファイルを編集ソフトに読み込んで動画と合成

#### AI音声のメリット・デメリット

| | メリット | デメリット |
|--|---------|-----------|
| AI音声 | 一定品質、録り直し容易、静かな部屋不要 | 感情表現に限界、キャラ感が出る |
| マイク | 自然、信頼感、柔軟な表現 | 録音環境必要、編集が大変 |

#### YouTubeポリシー

- AI音声はYouTubeで**許可されている**
- パートナープログラム（収益化）も問題なし
- ただし完全自動生成スパムはNG。視聴者に価値を提供する内容であること

---

## 3. 編集ソフト比較

### 無料

| ソフト | OS | 特徴 | n8n動画向き度 |
|--------|-----|------|-------------|
| **DaVinci Resolve (無料版)** | Win/Mac/Linux | プロ級。カラーグレーディング・VFX・音声ミキシング一体型。無料版でも十分すぎる機能 | ★★★★★ |
| **CapCut (デスクトップ版)** | Win/Mac | AI自動字幕、テンプレート、直感的UI。2026年にAI Auto-Edit等の新機能追加 | ★★★★☆ |
| **iMovie** | Mac/iOS | Apple製。シンプルで初心者向け | ★★★☆☆ |

### 有料

| ソフト | 価格帯 | 特徴 | n8n動画向き度 |
|--------|--------|------|-------------|
| **Adobe Premiere Pro** | 月額約$23 | 業界標準。最も高機能 | ★★★★★ |
| **Final Cut Pro** | 買い切り約$300 | Mac専用。高速。書き出しプリセット豊富 | ★★★★☆ |
| **Filmora** | 年額約$50 | 初心者向け。AIサイレンス除去・自動キャプション | ★★★★☆ |
| **Descript** | 月額約$24 | テキストベース編集。「えー」「あー」自動除去。AI文字起こし | ★★★★☆ |

### n8n動画への推奨

- **初心者**: CapCut（無料、AI字幕、テンプレート豊富）
- **本格派**: DaVinci Resolve無料版（プロ品質を無料で実現）
- **効率重視**: Descript（音声をテキストとして編集。沈黙・フィラー自動除去）

---

## 4. BGM・効果音の入手先

### BGM（バックグラウンドミュージック）

| サイト | 料金 | ライセンス | 特徴 |
|--------|------|-----------|------|
| **YouTube Audio Library** | 無料 | 著作権フリー | YouTube Studio内蔵。最も安全 |
| **Pixabay Music** | 無料 | ロイヤリティフリー（帰属不要） | 高品質。商用利用可 |
| **Bensound** | 無料/有料 | 無料版はクレジット必要 | ジャンル豊富 |
| **Chosic** | 無料 | ロイヤリティフリー | YouTube・SNS向けに整理済み |
| **AShamaluev Music** | 無料 | YouTube利用可 | 600+曲。ジャンル・ムード別 |
| **Free To Use** | 無料 | ロイヤリティフリー | YouTubeチャンネルで試聴可 |

### 効果音

| サイト | 料金 | 特徴 |
|--------|------|------|
| **YouTube Audio Library** | 無料 | 著作権完全フリー。帰属不要 |
| **Pixabay Sound Effects** | 無料 | 帰属不要。MP3ダウンロード |
| **Mixkit** | 無料 | 商用・個人利用可 |
| **ZapSplat** | 無料/有料 | チュートリアル向けSE充実（成功音、エラー音、進行音等） |
| **Podcastle** | 無料 | 著作権フリー |

### n8n動画で使える効果音アイデア

- ノード接続時: 軽い「カチッ」クリック音
- ワークフロー実行成功: 達成感のある短い効果音
- エラー発生: 柔らかいエラー音
- 重要ポイント強調: 「ポン」という注目音
- トランジション: ウーッシュ音

---

## 5. 画面の見やすさを上げるテクニック

### カーソルハイライト

| ツール | OS | 方法 |
|--------|-----|------|
| **Screen Studio** | Mac | 自動でカーソルをスムージング+ハイライト |
| **Mouse Highlighter (PowerToys)** | Windows | Microsoft製無料ツール。クリック時にハイライト表示 |
| **Presentify** | Mac | カーソル周りにハイライト円を表示 |
| **OBS プラグイン** | 全OS | カーソルキャプチャプラグインで強調 |

### ズームイン（操作部分の拡大）

- **Screen Studio**: 録画時にクリック箇所を自動ズーム（最も簡単）
- **FocuSee**: AI自動ズーム + マウス追跡
- **編集時に手動ズーム**: Premiere Pro / DaVinci Resolve / CapCutでキーフレームを使ってスケール拡大
- **Camtasia**: 録画後にズーム&パンアニメーションを追加

### その他のテクニック

1. **デスクトップを整理**: 不要なアイコン・通知を非表示にして録画
2. **ブラウザ拡大**: n8nのUIをブラウザで125-150%に拡大して操作
3. **テーマ統一**: n8nのダーク/ライトテーマを動画シリーズで統一
4. **注釈・矢印**: 編集時に赤い矢印やボックスで注目箇所を強調
5. **字幕（テロップ）**: 重要な手順やパラメータをテキストで表示
6. **画面レイアウト**: n8nのキャンバスを中央に大きく表示。サイドバーは必要時のみ
7. **解像度**: 1920x1080で録画（4Kモニターでも出力は1080pで十分）
8. **フォントサイズ**: コードエディタやノード設定のフォントを大きめに

---

## 6. 最低限の機材リスト

### ミニマム構成（予算: 0円）

| 項目 | 選択 |
|------|------|
| 画面録画 | OBS Studio（無料） |
| 音声 | VOICEVOX（無料AI音声） |
| 編集 | DaVinci Resolve無料版 or CapCut |
| BGM | YouTube Audio Library / Pixabay |
| 効果音 | YouTube Audio Library / Mixkit |

### 推奨構成（予算: ~$200）

| 項目 | 選択 | 価格 |
|------|------|------|
| 画面録画 | OBS Studio | 無料 |
| マイク | Audio-Technica AT2020USB+ or Rode NT-USB Mini | ~$100 |
| ポップフィルター | 汎用品 | ~$10 |
| 編集 | DaVinci Resolve無料版 | 無料 |
| BGM/SE | YouTube Audio Library + Pixabay | 無料 |
| カーソル強調 | PowerToys (Win) / Presentify (Mac) | 無料 |

### ベスト構成（予算: ~$500/年）

| 項目 | 選択 | 価格 |
|------|------|------|
| 画面録画 | Screen Studio (Mac) | $108/年 |
| マイク | Shure MV7 | ~$250 |
| ポップフィルター + アーム | 汎用品 | ~$30 |
| 編集 | DaVinci Resolve無料版 or Descript | 無料 or $24/月 |
| AI音声(補助) | ElevenLabs | 無料枠 or 有料 |
| BGM/SE | YouTube Audio Library + Pixabay | 無料 |

---

## 7. 推奨ワークフロー（録画 → 編集 → 書き出し）

### Phase 1: 準備（録画前）

```
1. 台本作成
   - 動画の構成をアウトライン化（導入→手順1→手順2→...→まとめ）
   - 各セクションで見せる画面・操作を事前にメモ
   - ナレーション原稿を会話調で書く

2. 環境整備
   - デスクトップを整理（アイコン・通知OFF）
   - n8nワークフローを事前に準備（デモ用データも用意）
   - ブラウザのブックマークバー非表示
   - 不要なタブを閉じる

3. 録画設定確認
   - 解像度: 1920x1080
   - FPS: 30
   - マイク入力レベル確認（テスト録音）
   - OBSのシーン設定（全画面 / ブラウザのみ等）
```

### Phase 2: 録画

```
4. 画面録画
   【Screen Studioの場合】
   - アプリ起動 → 録画範囲選択 → 録画開始
   - 普通に操作するだけで自動ズーム・カーソルスムージングが適用

   【OBSの場合】
   - シーン選択 → 録画開始
   - 操作はゆっくり・大きく動かす
   - ミスしても止めずに続行（編集でカット）

5. 音声録音
   【マイクの場合】
   - 画面録画と同時にナレーション
   - または後から別撮りでアフレコ（推奨：編集の自由度が高い）

   【VOICEVOXの場合】
   - 台本テキストをVOICEVOXに入力
   - イントネーション調整
   - WAVファイルで書き出し
```

### Phase 3: 編集

```
6. 素材の読み込み
   - 録画ファイル + 音声ファイルを編集ソフトに読み込み
   - BGMトラックを追加（音量は-20dB程度に下げる）

7. カット編集
   - 無駄な待ち時間・ミス操作をカット
   - 「えー」「あー」等のフィラーを除去
   - 操作の間に適度な間（0.5-1秒）を残す

8. 視覚強化
   - 重要箇所にズームイン（キーフレーム）
   - テロップ追加（手順番号・パラメータ名等）
   - 矢印・ボックスで注目箇所を強調
   - トランジション（シンプルなカット or フェード）

9. 音声調整
   - ナレーション音量の正規化
   - BGMとナレーションのバランス調整
   - 効果音の配置（ノード接続時、成功時等）

10. 字幕生成
    - CapCut / DaVinci Resolve / Descriptの自動字幕機能を使用
    - 誤変換を手動修正
```

### Phase 4: 書き出し・アップロード

```
11. 書き出し設定
    - フォーマット: MP4
    - コーデック: H.264（最も安定）or H.265（高画質）
    - 解像度: 1920x1080
    - フレームレート: 30fps
    - ビットレート: 8-12 Mbps（1080p/30fps）
    - 音声コーデック: AAC
    - 音声ビットレート: 256kbps（ステレオ）
    - サンプルレート: 48kHz（YouTube推奨。44.1kHzはNG）

12. YouTubeアップロード
    - タイトル・説明文・タグを設定
    - サムネイル作成（Canva等で）
    - チャプター（タイムスタンプ）を説明欄に記載
    - 字幕ファイル(.srt)があれば追加アップロード
```

### バッチ制作のコツ

- 1回の録画セッションで3-5本分まとめて録画
- 台本は1週間分を事前に用意
- 編集テンプレート（イントロ・アウトロ・テロップスタイル）を作っておく
- サムネイルもテンプレート化して効率化

---

## 参考リンク

### 画面録画
- [Screen Studio公式](https://screen.studio/)
- [OBS Studio公式](https://obsproject.com/)
- [Screenize (OSS代替)](https://github.com/syi0808/screenize)
- [6 Best Screen Recorders for YouTube 2026](https://www.bandicam.com/blog/best-screen-recorders-for-youtube/)
- [Best Screen Recording Software for YouTube in 2026](https://streamyard.com/blog/best-screen-recording-software-for-youtube)

### OBS設定
- [Best OBS Settings for Recording 2026 (OBSBOT)](https://www.obsbot.com/blog/video-recording/obs-setting-for-recording)
- [Best OBS 1080p 60fps Settings 2026](https://obs-versions.com/blog/obs-1080p-60fps-settings)
- [2026 Dev YouTube Guide: OBS & Descript Setup](https://johal.in/start-youtube-channel-developers-obs-descript-2026/)

### AI音声
- [VOICEVOX公式](https://voicevox.hiroshiba.jp/)
- [AI Voiceover for YouTube: Complete Beginner Guide 2026](https://softenkik.com/ai-voiceover-for-youtube/)
- [AI Voiceover for YouTube (GoFaceless)](https://www.gofaceless.ai/en/blog/ai-voiceover-for-youtube)
- [VOICEVOXの使い方完全マニュアル](https://lilium-fairy.com/etc111/)

### 編集ソフト
- [10 Best Video Editing Software for YouTube 2026 (OBSBOT)](https://www.obsbot.com/blog/video-production/best-video-editing-software-for-youtube)
- [Best Free Video Editing Software for YouTube 2026 (CyberLink)](https://www.cyberlink.com/blog/youtube-video-editing/49/best-video-editing-software-for-youtube)
- [DaVinci Resolve Full Course 2026](https://www.youtube.com/watch?v=MCDVcQIA3UM)

### BGM・効果音
- [YouTube Audio Library](https://studio.youtube.com/channel/audio)
- [Pixabay Music](https://pixabay.com/music/)
- [Mixkit Free Sound Effects](https://mixkit.co/free-sound-effects/)
- [Chosic Free Music for YouTube](https://www.chosic.com/free-music/for-youtube/)

### YouTube書き出し設定
- [YouTube推奨エンコード設定(公式)](https://support.google.com/youtube/answer/1722171?hl=en)
- [2026 Best Upload Settings for YouTube](https://www.zebgardner.com/photo-and-video-editing/2026-update-best-upload-settings-for-youtube)
- [Best Video Format for YouTube 2026](https://streamersize.com/blog/best-video-format-for-youtube/)

### ワークフロー
- [Faceless YouTube Automation Guide 2026](https://www.autoclips.app/faceless-youtube-automation-guide)
- [Full Faceless YouTube Workflow Using Free AI Tools](https://medium.com/illumination/a-full-faceless-youtube-workflow-using-only-free-ai-tools-step-by-step-guide-5851d474cd62)
- [Screen Recording Cursor Click Effects Mac 2026](https://rekort.app/blog/screen-recording-cursor-click-effects)
