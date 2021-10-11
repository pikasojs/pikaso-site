import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Box,
  Button,
  Typography,
  CardActions,
  CardContent
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
          loadFromFile
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card sx={{ mb: 4 }}>
          <Box my={1}>
            <div
              ref={ref}
              style={{
                margin: '0 auto',
                background: '#f5f5f5',
                width: '600px',
                height: '400px'
              }}
            />
          </Box>

          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" component="label">
              Select Image From Computer
              <input
                accept="image/*"
                type="file"
                hidden
                onChange={handleImageFile}
              />
            </Button>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <Markdown>
                {() =>
                  `[setImageFromFile](/api/classes/Background.html#setImageFromFile)`
                }
              </Markdown>
            </Typography>
            <CodeHighlighter language="typescript">{code}</CodeHighlighter>
          </CardContent>
        </Card>
      </AccordionDetails>
    </Accordion>
  )
}
