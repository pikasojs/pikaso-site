import { useEffect } from 'react'

import { Box, Button, ButtonGroup } from '@mui/material'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Selection() {
  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    editor?.shapes.image.insert('/tiger.svg', {
      x: 100,
      y: 100
    })

    editor?.shapes.circle.insert({
      fill: 'red',
      radius: 50,
      x: 500,
      y: 100
    })

    editor?.shapes.label.insert({
      container: {
        x: 600,
        y: 300
      },
      tag: {
        fill: 'transparent',
        cornerRadius: 0
      },
      text: {
        text: "Pikaso is great, isn't it?",
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'purple'
      }
    })
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
            height: '500px'
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 1 }}
          onClick={() => {
            editor?.board.selection.deselectAll()

            const shape = editor?.board.shapes.find(shape => {
              return shape.node.getClassName() === 'Image'
            })

            editor?.board.selection.toggle(shape!)
            editor?.board.selection.moveX(100)
            editor?.board.selection.moveY(100)
          }}
        >
          Select Image and Move
        </Button>

        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 1 }}
          onClick={() => {
            const shape = editor?.board.shapes.find(shape => {
              return shape.node.getClassName() === 'Circle'
            })

            editor?.board.selection.toggle(shape!)
          }}
        >
          Toggle Circle
        </Button>

        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 1 }}
          onClick={() => {
            editor?.board.selection.deselectAll()

            editor?.board.selection.find(shape => {
              return shape.node.getClassName() === 'Label'
            })
          }}
        >
          Select Label
        </Button>

        <ButtonGroup variant="outlined" size="small">
          <Button onClick={() => editor?.selection.selectAll()}>
            Select All
          </Button>

          <Button onClick={() => editor?.selection.deselectAll()}>
            Deselect All
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}
