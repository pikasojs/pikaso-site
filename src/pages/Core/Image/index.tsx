import { useEffect } from 'react'
import { Button, Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'
import { getRandomNumber } from 'src/utils/get-random-number'

const doc = raw('./doc.md')

export default function Image() {
  useTitle('Pikaso | Core Components | Image')
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
      addRandomImage()
    }
  }, [editor])

  const addRandomImage = () => {
    editor?.shapes.image.insert(
      `https://source.unsplash.com/random/200x200random?rand=${Math.random()}`,
      {
        x: getRandomNumber(0, editor.board.stage.width() - 100),
        y: getRandomNumber(0, editor.board.stage.height() - 100),
        drawBorder: true
      }
    )
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
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={addRandomImage}
        >
          Add Random Image
        </Button>
      </Box>
    </div>
  )
}
