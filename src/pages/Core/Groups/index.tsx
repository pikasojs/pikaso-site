import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function SnapGrid() {
  useTitle('Pikaso | Core Components | Groups')
  const [ref, editor] = usePikaso({
    snapToGrid: {
      strokeWidth: 1,
      stroke: 'purple',
      dash: [5, 5]
    },
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    if (!editor) {
      return
    }

    const panda = [
      editor.shapes.circle.insert({
        fill: 'black',
        radius: 30,
        x: 350,
        y: 150
      }),
      editor.shapes.circle.insert({
        fill: 'black',
        radius: 30,
        x: 450,
        y: 150
      }),
      editor.shapes.circle.insert({
        fill: 'red',
        radius: 70,
        stroke: '#262626',
        x: 400,
        y: 200
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 9,
        stroke: 'orange',
        radius: 10,
        x: 430,
        y: 180
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 10,
        stroke: 'orange',
        radius: 11,
        x: 370,
        y: 180
      })
    ]

    const fox = [
      editor.shapes.triangle.insert({
        fill: 'orange',
        radius: 45,
        stroke: '#262626',
        x: 600,
        y: 150
      }),
      editor.shapes.triangle.insert({
        fill: 'orange',
        radius: 45,
        stroke: '#262626',
        x: 700,
        y: 150
      }),
      editor.shapes.circle.insert({
        fill: 'orange',
        radius: 70,
        stroke: '#262626',
        x: 650,
        y: 200
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 9,
        stroke: 'red',
        radius: 10,
        x: 680,
        y: 180
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 10,
        stroke: 'red',
        radius: 11,
        x: 620,
        y: 180
      }),
      editor.shapes.triangle.insert({
        fill: 'red',
        radius: 15,
        x: 650,
        y: 220
      })
    ]

    fox[0].rotate(80)
    fox[1].rotate(-80)

    editor.board.groups.attach(fox, 'fox')
    editor.board.groups.attach(panda, 'panda')
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
    </div>
  )
}
