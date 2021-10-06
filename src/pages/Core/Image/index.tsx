import { useEffect } from 'react'
import { Box } from '@mui/material'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'

import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Image() {
  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    if (editor) {
      editor.shapes.image.insert(
        `https://source.unsplash.com/random?rand=${Math.random()}`,
        {
          x: 100,
          y: 100
        }
      )

      editor.shapes.image.insert(
        `https://source.unsplash.com/random?rand=${Math.random()}`,
        {
          x: 600,
          y: 100
        }
      )
    }
  }, [editor])

  return (
    <div>
      <Markdown>{doc}</Markdown>

      <Box mb={3}>
        <div
          ref={ref}
          style={{
            margin: '0 auto',
            background: '#CBC3E3',
            width: '100%',
            height: '300px'
          }}
        />
      </Box>
    </div>
  )
}
