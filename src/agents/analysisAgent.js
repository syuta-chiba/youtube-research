import { ANTHROPIC_API_BASE, ANTHROPIC_MODEL } from '../config.js';

/**
 * Analyze buzz videos + trend data and generate actionable video ideas
 */
export async function analyzeResults(apiKey, buzzVideos, trendData, channelInfo = {}) {
  const topVideos = buzzVideos.slice(0, 10).map(v => ({
    title: v.title,
    channel: v.channelTitle,
    views: v.viewCount,
    subs: v.subscriberCount,
    buzzRatio: typeof v.buzzRatio === 'number' ? v.buzzRatio.toFixed(1) : v.buzzRatio,
    publishedAt: v.publishedAt,
    url: `https://youtube.com/watch?v=${v.videoId}`,
  }));

  const prompt = `あなたはプログラミング系YouTubeチャンネルのコンテンツ戦略アドバイザーです。

## 依頼者のチャンネル情報
- 登録者数: ${channelInfo.subscriberCount || 1434}人
- ジャンル: プログラミング・Web開発（日本語）

## 直近のバズ動画データ（バズ率順 = 再生数÷登録者数）
${JSON.stringify(topVideos, null, 2)}

## 現在のトレンドデータ
${JSON.stringify(trendData, null, 2)}

## 分析タスク
以下をJSON形式のみで返してください（マークダウンのコードブロックなし）:

{
  "analysis_summary": "全体的な傾向の要約（2-3文）",
  "buzz_patterns": [
    {
      "pattern": "バズのパターン名",
      "description": "どんな動画がバズっているか",
      "examples": ["動画タイトル例"],
      "applicable_to_my_channel": true,
      "reason": "自チャンネルに適用できる理由"
    }
  ],
  "recommended_videos": [
    {
      "rank": 1,
      "title": "YouTubeタイトル案（クリックされやすい形式）",
      "topic": "トピック",
      "why_now": "なぜ今このネタが狙い目か",
      "target_audience": "想定視聴者",
      "format": "チュートリアル|解説|比較|実況|レビュー|ニュース|入門",
      "estimated_duration": "15分",
      "difficulty_to_create": "低|中|高",
      "estimated_demand": "高|中|低",
      "buzz_potential": "高|中|低",
      "key_points": ["構成のポイント1", "ポイント2", "ポイント3"]
    }
  ],
  "keywords_to_include": ["SEO効果が高いキーワード"],
  "timing_advice": "投稿タイミングのアドバイス",
  "analyzed_at": "${new Date().toISOString()}"
}`;

  const response = await fetch(`${ANTHROPIC_API_BASE}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 6000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(`Anthropic API error: ${response.status} - ${err?.error?.message || response.statusText}`);
  }

  const data = await response.json();
  const textBlock = data.content?.find(b => b.type === 'text');
  if (!textBlock) throw new Error('No text response from Claude');

  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Could not parse JSON from Claude response');

  return JSON.parse(jsonMatch[0]);
}
