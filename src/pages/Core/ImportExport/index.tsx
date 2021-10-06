import { useEffect } from 'react'

import { Box, Button } from '@mui/material'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'
import { ExportBoard } from 'src/components/ExportBoard'
import { ImportBoard } from 'src/components/ImportBoard'
import { getRandomNumber } from 'src/utils/get-random-number'
import { getRandomColor } from 'src/utils/get-random-color'

const doc = raw('./doc.md')

export default function ImportExport() {
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

  const handleAddCircle = () => {
    if (!editor) {
      return
    }

    editor.shapes.circle.insert({
      radius: getRandomNumber(40, 80),
      fill: getRandomColor(),
      x: getRandomNumber(0, editor.board.stage.width() - 50),
      y: getRandomNumber(0, editor.board.stage.height() - 50)
    })
  }

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

      <Box display="flex" justifyContent="space-between">
        <div>
          <Button
            color="secondary"
            sx={{ mr: 1 }}
            onClick={() => editor?.reset()}
          >
            Reset Board
          </Button>

          <Button color="secondary" onClick={handleAddCircle}>
            Add Circle
          </Button>
        </div>

        <div>
          <ImportBoard editor={editor} />
          <ExportBoard editor={editor} />
        </div>
      </Box>
    </div>
  )
}
