import { ANTHROPIC_API_BASE, ANTHROPIC_MODEL } from '../config.js';

const TREND_PROMPT = `あなたは日本のプログラミング・Web開発系YouTubeチャンネル向けのトレンドリサーチャーです。

以下の情報をWeb検索で収集し、JSON形式で返してください:
1. X（Twitter）のプログラミング関連トレンド（日本語）
2. Zenn / Qiita のトレンド記事のトピック
3. Hacker News / Reddit の話題になっているトピック
4. 新しいフレームワーク・ライブラリ・AIツールのリリース情報
5. 技術カンファレンスや勉強会の話題

**重要**: キーワード「{KEYWORDS}」に関連するものを重点的に調査してください。

必ず以下のJSON形式のみで返答してください（マークダウンのコードブロックなし、JSONのみ）:
{
  "hot_topics": ["話題1", "話題2"],
  "trending_keywords": ["キーワード1", "キーワード2"],
  "new_releases": [
    { "name": "名前", "category": "framework|library|tool|ai", "buzz_level": "high|medium|low", "description": "説明" }
  ],
  "content_ideas": [
    { "idea": "動画企画案", "why": "なぜ今狙い目か", "difficulty": "低|中|高", "estimated_demand": "高|中|低", "suggested_title": "YouTubeタイトル案" }
  ],
  "searched_at": "${new Date().toISOString()}"
}`;

/**
 * Fetch programming trends using Claude AI with web_search tool
 */
export async function fetchTrends(apiKey, keywords = []) {
  const prompt = TREND_PROMPT.replace('{KEYWORDS}', keywords.length ? keywords.join(', ') : 'プログラミング Web開発 AI');

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
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(`Anthropic API error: ${response.status} - ${err?.error?.message || response.statusText}`);
  }

  const data = await response.json();

  // Find text block (may be preceded by tool_use blocks)
  const textBlock = data.content?.find(b => b.type === 'text');
  if (!textBlock) throw new Error('No text response from Claude');

  // Extract JSON
  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Could not parse JSON from Claude response');

  return JSON.parse(jsonMatch[0]);
}
