import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI News Hub - AI・機械学習ニュースまとめ',
  description: 'ChatGPT、機械学習、ディープラーニング、LLMなどAI技術の最新ニュースを毎日自動更新',
  keywords: ["AI","人工知能","機械学習","ディープラーニング","ChatGPT","LLM","OpenAI"],
  openGraph: {
    title: 'AI News Hub - AI・機械学習ニュースまとめ',
    description: 'ChatGPT、機械学習、ディープラーニング、LLMなどAI技術の最新ニュースを毎日自動更新',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
