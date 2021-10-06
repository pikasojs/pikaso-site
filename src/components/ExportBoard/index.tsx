import { useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { Pikaso } from 'pikaso'

import { BasePopover } from '../BasePopover'

interface Props {
  editor: Pikaso | null
}

export function ExportBoard({ editor }: Props) {
  const [result, setResult] = useState<{
    type: 'image' | 'json'
    data: string
  } | null>(null)

  const handleExportImage = () => {
    if (!editor) {
      return
    }

    const image = editor.export.toImage({
      pixelRatio: 3
    })

    setResult({
      type: 'image',
      data: image
    })
  }

  const handleExportJson = () => {
    if (!editor) {
      return
    }

    const json = editor.export.toJson()
    setResult({
      type: 'json',
      data: JSON.stringify(json)
    })
  }

  return (
    <>
      <BasePopover
        buttonRenderer={({ id, isOpen }) => (
          <Chip
            aria-describedby={id}
            size="medium"
            label={<strong>Export</strong>}
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
        {({ close }) => (
          <Box display="flex" mx={2} my={2}>
            <Button
              variant="outlined"
              sx={{ mr: 1 }}
              onClick={() => {
                close()
                handleExportImage()
              }}
            >
              Image
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                close()
                handleExportJson()
              }}
            >
              Json
            </Button>
          </Box>
        )}
      </BasePopover>

      <Dialog open={!!result} fullWidth maxWidth="md">
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            Export as {result?.type}
            <IconButton onClick={() => setResult(null)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent
          style={{
            overflow: 'hidden'
          }}
        >
          {result?.type === 'image' && (
            <Box width="100%">
              <img
                src={result.data}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  maxWidth: '500px',
                  margin: '0 auto',
                  display: 'block'
                }}
              />
            </Box>
          )}

          {result?.type === 'json' && (
            <TextField
              value={result.data ?? ''}
              multiline
              maxRows={20}
              fullWidth
              InputProps={{
                readOnly: true
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
