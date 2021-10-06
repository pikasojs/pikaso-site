import { useState } from 'react'
import { Avatar, Chip } from '@mui/material'
import { SketchPicker } from 'react-color'
import type { ColorResult } from 'react-color'

import { BasePopover } from '../BasePopover'

interface Props {
  title: string
  defaultColor: string
  onChange: (color: string) => void
}

export function ColorPicker({ title, defaultColor, onChange }: Props) {
  const [color, setColor] = useState(defaultColor)

  const onSwatchHover = (color: ColorResult) => {
    setColor(color.hex)
    onChange(color.hex)
  }

  const onChangeColor = (color: ColorResult) => {
    setColor(color.hex)
    onChange(color.hex)
  }

  return (
    <BasePopover
      buttonRenderer={({ id, isOpen }) => (
        <Chip
          aria-describedby={id}
          size="medium"
          avatar={
            <Avatar
              sx={{
                bgcolor: color,
                borderColor: 'primary.main'
              }}
            >
              &nbsp;
            </Avatar>
          }
          label={<strong>{title}</strong>}
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
      <SketchPicker
        color={color}
        presetColors={[]}
        onSwatchHover={onSwatchHover}
        onChange={onChangeColor}
      />
    </BasePopover>
  )
}
