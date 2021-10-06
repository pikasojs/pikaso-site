import { useEffect } from 'react'

import { Button, Box } from '@mui/material'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Filters() {
  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    editor?.board.background.setImageFromUrl(
      `https://source.unsplash.com/random/1000x400?hash=${Math.random()}`
    )
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
            height: '400px'
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          size="small"
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() =>
            editor?.board.background.image.addFilter({
              name: 'Blur',
              options: {
                blurRadius: 10
              }
            })
          }
        >
          Blur
        </Button>

        <Button
          size="small"
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() =>
            editor?.board.background.image.addFilter({
              name: 'Contrast',
              options: {
                contrast: 30
              }
            })
          }
        >
          Contrast
        </Button>

        <Button
          size="small"
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() =>
            editor?.board.background.image.addFilter({
              name: 'Grayscale'
            })
          }
        >
          Grayscale
        </Button>

        <Button
          size="small"
          sx={{ mr: 1 }}
          href="/api/index.html#Filters"
          target="_blank"
        >
          More Filters...
        </Button>
      </Box>
    </div>
  )
}
