import { Box, Button } from '@mui/material'

import { CodeHighlighter } from 'src/components/CodeHighlighter'

import { Markdown } from 'src/components/Markdown'

import usePikaso from 'src/hooks/use-pikaso'

const code = `// load image from url
editor.board.background.setImageFromUrl('<ImageUrl>')

// Alternatively, you may use
editor.loadFromUrl('<ImageUrl>')`

export function LoadFromUrl() {
  const [ref, editor] = usePikaso()

  const handleLoadRandomBackground = () => {
    editor?.board.background.setImageFromUrl(
      `https://source.unsplash.com/random?hash=${Math.random()}`
    )
  }

  return (
    <>
      <a id="load-image-from-url"></a>
      <Markdown>
        {() => `
        ### [Load image from url](#load-image-from-url)
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoadRandomBackground}
        >
          Load Random Background
        </Button>
      </Box>
    </>
  )
}
