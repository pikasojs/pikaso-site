import { useEffect } from 'react'
import { Box } from '@mui/material'

import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'

import { Markdown } from 'src/components/Markdown'
import { RangeSlider } from 'src/components/RangeSlider'

const doc = raw('./doc.md')

export default function Rotation() {
  const [ref, editor] = usePikaso({})

  useEffect(() => {
    const run = async () => {
      if (!editor) {
        return
      }

      await editor.loadFromUrl(
        'https://images.unsplash.com/photo-1504194104404-433180773017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'
      )

      editor.shapes.image.insert('/tiger.svg', {
        x: 1000,
        y: 200,
        cropWidth: 100
      })

      editor.shapes.polygon.insert({
        sides: 5,
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'blue', 1, 'yellow'],
        radius: 200,
        x: 300,
        y: 400
      })
    }

    run()
  }, [editor])

  return (
    <>
      <Markdown>{doc}</Markdown>

      <div
        ref={ref}
        style={{
          margin: '0 auto',
          width: '600px',
          height: '400px',
          border: '2px solid #262626',
          background: 'skyblue'
        }}
      />

      <Box my={2} display="flex" justifyContent="center">
        <RangeSlider
          title="Rotate & Transform"
          defaultValue={0}
          SliderProps={{
            min: -360,
            max: 360
          }}
          onChange={value => editor?.rotation.transform(value as number)}
        />

        <RangeSlider
          title="Straighten"
          defaultValue={0}
          SliderProps={{
            min: -360,
            max: 360
          }}
          onChange={value => editor?.rotation.straighten(value as number)}
        />
      </Box>
    </>
  )
}
