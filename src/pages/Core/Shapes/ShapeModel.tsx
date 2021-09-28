import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@mui/material'
import { Pikaso } from 'pikaso'

import { CodeHighlighter } from 'src/components/CodeHighlighter'

import { EditorShape } from './EditorShape'

interface Props {
  type: string
  codes: Record<string, string>
  insertFn: (edior: Pikaso) => void
}

export function ShapeModel({ type, codes, insertFn }: Props) {
  return (
    <div>
      <Card sx={{ mb: 4 }}>
        <EditorShape onLoad={insertFn} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Insert
          </Typography>

          <CodeHighlighter language="typescript">
            {codes.insert}
          </CodeHighlighter>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
