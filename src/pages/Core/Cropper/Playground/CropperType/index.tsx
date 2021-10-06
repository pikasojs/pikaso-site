import { Box, Button, Chip } from '@mui/material'
import type { CropperOptions } from 'pikaso'

import { BasePopover } from 'src/components/BasePopover'

const Types = [
  {
    fixed: false,
    circular: false
  },
  {
    fixed: false,
    circular: true
  },
  {
    fixed: true,
    circular: false
  },
  {
    fixed: true,
    circular: true
  }
]

interface Props {
  config: Partial<CropperOptions>
  onChange: (config: { fixed: boolean; circular: boolean }) => void
}

export function CropperType({ config, onChange }: Props) {
  return (
    <BasePopover
      buttonRenderer={({ id, isOpen }) => (
        <Chip
          aria-describedby={id}
          size="medium"
          label={
            <>
              <strong>{config.fixed ? 'Fixed' : 'Flexible'}</strong>
              {' - '}
              <strong>{config.circular ? 'Circular' : 'Rectangular'}</strong>
            </>
          }
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
        <Box sx={{ px: 2, py: 2, maxWidth: '450px' }}>
          {Types.map((type, index) => (
            <Button
              key={index}
              variant={
                type.fixed === config.fixed && type.circular === config.circular
                  ? 'contained'
                  : 'outlined'
              }
              size="small"
              sx={{ mr: 1, mb: 1, width: '200px' }}
              onClick={() => {
                close()
                onChange({
                  fixed: type.fixed,
                  circular: type.circular
                })
              }}
            >
              {type.fixed ? 'Fixed' : 'Flexible'} &{' '}
              {type.circular ? 'Circular' : 'Rectangular'}
            </Button>
          ))}
        </Box>
      )}
    </BasePopover>
  )
}
