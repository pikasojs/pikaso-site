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

const code = `// load image from url
editor.board.background.setImageFromUrl('<ImageUrl>')

// Alternatively, you may use
editor.loadFromUrl('<ImageUrl>')`

export function LoadFromUrl() {
  const [ref, editor] = usePikaso()

  const handleLoadRandomBackground = () => {
    editor?.board.background.setImageFromUrl(
      `https://source.unsplash.com/random1000x400?hash=${Math.random()}`
    )
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
          loadFromUrl
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
                width: '250px',
                height: '250px'
              }}
            />
          </Box>

          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoadRandomBackground}
            >
              Load Random Background
            </Button>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <Markdown>
                {() =>
                  `[setImageFromUrl](/api/classes/Background.html#setImageFromUrl)`
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
