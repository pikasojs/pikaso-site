import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'
import type { BaseShapes } from 'pikaso'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

import { HeartDrawer } from './Heart/HeartDrawer'

const doc = raw('./doc.md')

interface Shapes extends BaseShapes {
  heart: HeartDrawer
}

export default function CreateCustomShapes() {
  useTitle('Pikaso | Advanced | Create Custom Shapes')

  const [ref, editor] = usePikaso<Shapes>(
    {
      selection: {
        transformer: {
          borderStroke: '#262626',
          anchorFill: '#262626'
        }
      }
    },
    board => ({
      heart: new HeartDrawer(board)
    })
  )

  useEffect(() => {
    if (editor) {
      const shape = editor.shapes.heart.insert({
        x: 100,
        y: 100,
        scale: {
          x: 6,
          y: 6
        }
      })

      shape.to({
        duration: 10,
        x: editor.board.stage.width() - shape.node.width()
      })

      editor.shapes.heart.draw()
    }
  }, [editor])

  return (
    <div>
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

      <Markdown>{doc}</Markdown>
    </div>
  )
}
