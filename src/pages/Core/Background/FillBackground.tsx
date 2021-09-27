import { Box, Button } from '@mui/material'
import { useEffect } from 'react'

import { CodeHighlighter } from 'src/components/CodeHighlighter'
import { Markdown } from 'src/components/Markdown'
import usePikaso from 'src/hooks/use-pikaso'
import { getRandomColor } from 'src/utils/get-random-color'

const code = `// change background color
editor.board.background.fill('#262626')`

export function FillBackground() {
  const [ref, editor] = usePikaso()

  useEffect(() => {
    editor?.board.background.fill(getRandomColor())
  }, [editor])

  const handleChangeColor = () => {
    editor?.board.background.fill(getRandomColor())
  }

  return (
    <>
      <Markdown>
        {() => `
        ### [fill](/api/classes/Background.html#fill)
      `}
      </Markdown>

      <Box my={1}>
        <div
          ref={ref}
          style={{
            margin: '0 auto',
            background: '#f5f5f5',
            width: '250px',
            height: '250px'
          }}
        />
      </Box>

      <CodeHighlighter language="typescript">{code}</CodeHighlighter>

      <Box my={2}>
        <Button variant="contained" onClick={handleChangeColor}>
          Change Background Color
        </Button>
      </Box>
    </>
  )
}
