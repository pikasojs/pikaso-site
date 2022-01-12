import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function CreateCustomFilters() {
  useTitle('Pikaso | Advanced | Create Custom Filters')

  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    const url = '/sample.jpeg'

    if (editor) {
      editor.shapes.image.insert(url, {
        x: 100,
        y: 100
      })

      editor.shapes.image
        .insert(url, {
          x: 300,
          y: 100
        })
        .then(shape => {
          shape.addFilter({
            customFn: imageData => {
              const d = imageData.data

              for (let i = 0; i < d.length; i += 4) {
                const r = d[i]
                const g = d[i + 1]
                const b = d[i + 2]
                const v = 0.2126 * r + 0.7152 * g + 0.0722 * b
                d[i] = d[i + 1] = d[i + 2] = v
              }
            }
          })
        })

      editor.shapes.image
        .insert(url, {
          x: 500,
          y: 100
        })
        .then(shape => {
          shape.addFilter({
            customFn: imageData => {
              const d = imageData.data
              const adjustment = 100

              for (var i = 0; i < d.length; i += 4) {
                d[i] += adjustment
                d[i + 1] += adjustment
                d[i + 2] += adjustment
              }
            }
          })
        })
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
