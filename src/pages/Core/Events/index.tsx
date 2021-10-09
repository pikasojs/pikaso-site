import { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Events() {
  useTitle('Pikaso | Core Components | Shapes')
  const [events, setEvents] = useState<string[]>([])

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

    editor?.shapes.rect.insert({
      fill: 'red',
      width: 250,
      height: 100,
      x: 500,
      y: 100
    })

    editor?.on('*', e => {
      setEvents(state =>
        [
          e.name + (e.data ? `: ${JSON.stringify(e.data)}` : ''),
          ...state
        ].slice(0, 50)
      )
    })
  }, [editor])

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

      <Box display="flex" justifyContent="flex-end">
        <TextField
          value={events.join('\n')}
          multiline
          minRows={20}
          maxRows={20}
          fullWidth
          InputProps={{
            readOnly: true
          }}
        />
      </Box>
    </div>
  )
}
