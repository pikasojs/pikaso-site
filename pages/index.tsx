import React from 'react'
import dynamic from 'next/dynamic'

import Head from 'next/head'

const SocialCardDemo = dynamic(() => import('../components/SocialCardDemo'), {
  ssr: false
})

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pikaso</title>
      </Head>

      <SocialCardDemo />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        .editor {
          height: 40vh;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
