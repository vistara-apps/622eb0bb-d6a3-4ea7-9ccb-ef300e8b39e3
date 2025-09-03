import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const frameHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/frames/tip-success.png">
        <meta property="fc:frame:button:1" content="View Dashboard">
        <meta property="fc:frame:button:1:action" content="link">
        <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}">
        <title>Tip Successful - Like2Tip</title>
      </head>
      <body>
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Arial, sans-serif;">
          <div style="text-align: center;">
            <h1>🎉 Tip Sent Successfully!</h1>
            <p>Thank you for supporting the creator!</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return new NextResponse(frameHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
