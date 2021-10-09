import { useState, useEffect } from 'react'
import { Avatar, Box, Chip, IconButton, Tooltip } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'

import { Markdown } from 'src/components/Markdown'
import { BasePopover } from 'src/components/BasePopover'
import { getRandomColor } from 'src/utils/get-random-color'

const doc = raw('./doc.md')

const Drawings = {
  circle: {
    title: 'Circle',
    image: '/shapes/circle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  ellipse: {
    title: 'Ellipse',
    image: '/shapes/ellipse.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  rect: {
    title: 'Rectangle',
    image: '/shapes/rectangle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  polygon: {
    title: 'Polygon',
    image: '/shapes/polygon.svg',
    config: {
      sides: 5,
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  triangle: {
    title: 'Triangle',
    image: '/shapes/triangle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  arrow: {
    title: 'Arrow',
    image: '/shapes/arrow.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  },
  line: {
    title: 'Line',
    image: '/shapes/line.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  },
  pencil: {
    title: 'Free Style',
    image: '/shapes/pen.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  }
}

type DrawingType = keyof typeof Drawings

export default function Drawing() {
  useTitle('Pikaso | Core Components | Drawing')
  const [activeDrawing, setActiveDrawing] = useState<DrawingType>('pencil')

  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    if (editor) {
      editor.shapes.pencil.draw({
        stroke: 'blue',
        strokeWidth: 15
      })
    }
  }, [editor])

  const handleChangeDrawer = (shape: DrawingType) => {
    if (!editor) {
      return
    }

    editor.shapes[activeDrawing].stopDrawing()
    editor.shapes[shape].draw(Drawings[shape].config as any)
    setActiveDrawing(shape)
  }

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
            height: '350px'
          }}
        />
      </Box>

      <BasePopover
        buttonRenderer={({ id, isOpen }) => (
          <Chip
            aria-describedby={id}
            size="medium"
            label={
              <span>
                Drawing <strong>{Drawings[activeDrawing].title}</strong>
              </span>
            }
            variant="outlined"
            color="info"
            avatar={
              <Avatar
                variant="square"
                src={Drawings[activeDrawing].image}
                sx={{
                  width: 32,
                  height: 32
                }}
              />
            }
            sx={{
              cursor: 'pointer',
              borderColor: isOpen ? 'primary.main' : 'info',
              color: isOpen ? 'primary.main' : 'info'
            }}
          />
        )}
      >
        {({ close }) => (
          <>
            {Object.entries(Drawings).map(([name, shape]) => (
              <IconButton
                key={shape.title}
                sx={{ mr: 0.5 }}
                onClick={() => {
                  handleChangeDrawer(name as DrawingType)
                  close()
                }}
              >
                <Tooltip title={shape.title}>
                  <Avatar
                    variant="square"
                    src={shape.image}
                    sx={{
                      width: 32,
                      height: 32
                    }}
                  />
                </Tooltip>
              </IconButton>
            ))}
          </>
        )}
      </BasePopover>
    </div>
  )
}
