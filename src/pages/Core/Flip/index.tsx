import { useEffect } from 'react'
import { Box, ButtonGroup, Chip, IconButton } from '@mui/material'
import FlipIcon from '@mui/icons-material/Flip'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'
import { BasePopover } from 'src/components/BasePopover'

const doc = raw('./doc.md')

export default function Flip() {
  useTitle('Pikaso | Core Components | Flip')
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
          height: '400px'
        }}
      />

      <Box my={2} display="flex" justifyContent="center">
        <BasePopover
          buttonRenderer={({ id, isOpen }) => (
            <Chip
              aria-describedby={id}
              size="medium"
              label={<strong>Background Image</strong>}
              variant="outlined"
              color="info"
              sx={{
                cursor: 'pointer',
                borderColor: isOpen ? 'primary.main' : 'info',
                color: isOpen ? 'primary.main' : 'info'
              }}
            />
          )}
        >
          <Box mx={2} my={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  editor?.board.background.image.flipX()
                }}
              >
                <FlipIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  editor?.board.background.image.flipY()
                }}
              >
                <FlipIcon sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </ButtonGroup>
          </Box>
        </BasePopover>

        <BasePopover
          buttonRenderer={({ id, isOpen }) => (
            <Chip
              aria-describedby={id}
              size="medium"
              label={<strong>Board</strong>}
              variant="outlined"
              color="info"
              sx={{
                cursor: 'pointer',
                borderColor: isOpen ? 'primary.main' : 'info',
                color: isOpen ? 'primary.main' : 'info'
              }}
            />
          )}
        >
          <Box mx={2} my={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  editor?.flip.horizontal()
                }}
              >
                <FlipIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  editor?.flip.vertical()
                }}
              >
                <FlipIcon sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </ButtonGroup>
          </Box>
        </BasePopover>

        <BasePopover
          buttonRenderer={({ id, isOpen }) => (
            <Chip
              aria-describedby={id}
              size="medium"
              label={<strong>Selected Shapes</strong>}
              variant="outlined"
              color="info"
              sx={{
                cursor: 'pointer',
                borderColor: isOpen ? 'primary.main' : 'info',
                color: isOpen ? 'primary.main' : 'info'
              }}
            />
          )}
        >
          <Box mx={2} my={2}>
            <ButtonGroup disableElevation>
              <IconButton
                onClick={() => {
                  editor?.flip.horizontal(editor.board.selection.shapes)
                }}
              >
                <FlipIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  editor?.flip.vertical(editor.board.selection.shapes)
                }}
              >
                <FlipIcon sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
            </ButtonGroup>
          </Box>
        </BasePopover>
      </Box>
    </>
  )
}
