import { useEffect } from 'react'
import { Box } from '@mui/material'
import { LabelModel } from 'pikaso'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { ColorPicker } from 'src/components/ColorPicker'
import { RangeSlider } from 'src/components/RangeSlider'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Label() {
  useTitle('Pikaso | Core Components | Label')

  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    editor &&
      editor.shapes.label.insert({
        container: {
          x: 300,
          y: 100
        },
        tag: {
          fill: '#262626',
          cornerRadius: 0
        },
        text: {
          text: 'Pikaso Rocks',
          fill: '#00ff00',
          fontSize: 60
        }
      })
  }, [editor])

  const handleChangeColor = (fill: string) => {
    const shape = editor?.board.shapes.find(() => true) as LabelModel

    shape?.updateText({
      fill
    })
  }

  const handleChangeBackgroundColor = (fill: string) => {
    const shape = editor?.board.shapes.find(() => true) as LabelModel

    shape?.updateTag({
      fill
    })
  }

  const handleChangeFontSize = (fontSize: number | number[]) => {
    const shape = editor?.board.shapes.find(() => true) as LabelModel

    shape?.updateText({
      fontSize: fontSize as number
    })
  }

  const handleChangeBorderRadius = (radius: number | number[]) => {
    const shape = editor?.board.shapes.find(() => true) as LabelModel

    shape?.updateTag({
      cornerRadius: radius as number
    })
  }

  return (
    <>
      <Markdown>{doc}</Markdown>

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

      <Box>
        <ColorPicker
          title="Font Color"
          defaultColor="#00ff00"
          onChange={handleChangeColor}
        />
        <ColorPicker
          title="Background Color"
          defaultColor="#262626"
          onChange={handleChangeBackgroundColor}
        />
        <RangeSlider
          title="Font Size"
          defaultValue={60}
          SliderProps={{
            min: 20,
            max: 80,
            valueLabelDisplay: 'on'
          }}
          onChange={handleChangeFontSize}
        />

        <RangeSlider
          title="Border Radius"
          defaultValue={0}
          SliderProps={{
            min: 0,
            max: 20,
            valueLabelDisplay: 'on'
          }}
          onChange={handleChangeBorderRadius}
        />
      </Box>
    </>
  )
}
