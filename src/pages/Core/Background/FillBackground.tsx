import { useEffect } from 'react'
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
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
          fill
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
            <Button variant="contained" onClick={handleChangeColor}>
              Change Background Color
            </Button>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <Markdown>
                {() => `[fill](/api/classes/Background.html#fill) `}
              </Markdown>
            </Typography>
            <CodeHighlighter language="typescript">{code}</CodeHighlighter>
          </CardContent>
        </Card>
      </AccordionDetails>
    </Accordion>
  )
}
