import { Box, Button, ButtonGroup } from '@mui/material'

import raw from 'raw.macro'

import { useEffect } from 'react'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'
import { getRandomNumber } from 'src/utils/get-random-number'
import { getRandomColor } from 'src/utils/get-random-color'

const doc = raw('./doc.md')

export default function History() {
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
      new Array(20).fill(null).forEach(() => handleAddCircle())
    }
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
            height: '300px'
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <ButtonGroup variant="outlined" sx={{ mr: 2 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => editor?.undo()}
          >
            Undo
          </Button>

          <Button
            size="small"
            variant="outlined"
            onClick={() => editor?.reset()}
          >
            Reset
          </Button>

          <Button
            size="small"
            variant="outlined"
            onClick={() => editor?.redo()}
          >
            Redo
          </Button>
        </ButtonGroup>

        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleAddCircle}
        >
          Create Circle
        </Button>
      </Box>
    </div>
  )
}
