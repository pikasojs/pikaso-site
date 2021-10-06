import { Box, Button, Chip, Snackbar, TextField } from '@mui/material'
import { Pikaso } from 'pikaso'
import { ChangeEvent, useState } from 'react'

import { BasePopover } from '../BasePopover'

interface Props {
  editor: Pikaso | null
}

export function ImportBoard({ editor }: Props) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleImport = () => {
    if (!editor) {
      return
    }

    try {
      JSON.parse(value)
    } catch (e) {
      setError('Invalid JSON Input')
      return
    }

    editor.reset()

    setTimeout(() => {
      editor.load(value)
    }, 1000)
  }

  return (
    <>
      <BasePopover
        buttonRenderer={({ id, isOpen }) => (
          <Chip
            aria-describedby={id}
            size="medium"
            label={<strong>Import</strong>}
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
          <Box mx={2} my={2} display="flex" flexDirection="column">
            <div>
              <TextField
                maxRows={10}
                multiline
                label="Json Text"
                onChange={onChange}
              />
            </div>

            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              disabled={!value}
              onClick={() => {
                close()
                handleImport()
              }}
            >
              Import
            </Button>
          </Box>
        )}
      </BasePopover>

      <Snackbar
        open={!!error}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        autoHideDuration={6000}
        onClose={() => setError('')}
        message={error}
      />
    </>
  )
}
