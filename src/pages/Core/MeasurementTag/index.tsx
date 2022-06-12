import { useEffect } from 'react'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'
import { ReleaseBanner } from 'src/components/ReleaseBanner'

const doc = raw('./doc.md')

export default function Rotation() {
  useTitle('Pikaso | Core Components | Measurement Tag')
  const [ref, editor] = usePikaso({
    measurement: {
      background: {
        cornerRadius: 5,
        fill: 'purple'
      },
      text: {
        fill: '#fff',
        padding: 5,
        fontSize: 14,
        fontStyle: 'bold'
      }
    }
  })

  useEffect(() => {
    const run = async () => {
      if (!editor) {
        return
      }

      const shape = editor.shapes.rect.insert({
        width: 200,
        height: 100,
        x: 400,
        y: 200,
        fill: 'red'
      })

      shape.select()
    }

    run()
  }, [editor])

  return (
    <>
      <ReleaseBanner text="New as of v2.5.0" />
      <Markdown>{doc}</Markdown>

      <div
        ref={ref}
        style={{
          margin: '0 auto',
          background: '#CBC3E3',
          width: '100%',
          height: '500px'
        }}
      />
    </>
  )
}
