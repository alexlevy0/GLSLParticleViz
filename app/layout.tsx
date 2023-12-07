import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'Particle Viz',
  description: '🫨',
}

export default function RootLayout({ children }): React.JSX.Element {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
