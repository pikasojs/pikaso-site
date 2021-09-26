import { Box, Button } from '@mui/material'

import { CodeHighlighter } from 'src/components/CodeHighlighter'
import { Markdown } from 'src/components/Markdown'
import usePikaso from 'src/hooks/use-pikaso'

const code = `// load image file
editor.board.background.setImageFromFile('<ImageFile>')

// Alternatively, you may use
editor.loadFromFile('<ImageFile>')`

export function LoadFromFile() {
  const [ref, editor] = usePikaso()

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0]

    if (!file) {
      return
    }

    editor?.loadFromFile(file)
  }

  return (
    <>
      <a id="load-image-from-file"></a>
      <Markdown>
        {() => `
        ### [Load image from file](#load-image-from-file)
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
        <Button variant="contained" component="label">
          Select Image From Computer
          <input
            accept="image/*"
            type="file"
            hidden
            onChange={handleImageFile}
          />
        </Button>
      </Box>
    </>
  )
}
