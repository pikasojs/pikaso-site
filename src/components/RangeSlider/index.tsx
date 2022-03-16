import { useState } from 'react'
import { Box, Avatar, Chip, Slider, SliderThumb } from '@mui/material'
import type { SliderProps } from '@mui/material/Slider'

import { styled } from '@mui/styles'
import type { Theme } from '@mui/material'

import { BasePopover } from '../BasePopover'

const AirbnbSlider = styled(Slider)(({ theme }: { theme: Theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)'
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1
    }
  },
  '& .MuiSlider-track': {
    height: 3
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3
  }
}))

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  )
}

interface Props {
  title: string
  defaultValue: number | number[]
  SliderProps?: SliderProps
  valueLabelFormat?: (value: number | number[]) => string | number | number[]
  onChange: (value: number | number[]) => void
}

export function RangeSlider({
  title,
  defaultValue,
  SliderProps,
  valueLabelFormat = value => value,
  onChange
}: Props) {
  const [value, setValue] = useState(defaultValue)

  const onChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
    onChange(newValue)
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
                borderColor: 'primary.main'
              }}
            >
              {typeof valueLabelFormat === 'function'
                ? valueLabelFormat(value)
                : value ?? ''}
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
      <Box px={4} pt={5} pb={2} width="300px">
        <AirbnbSlider
          valueLabelDisplay="on"
          components={{ Thumb: AirbnbThumbComponent }}
          valueLabelFormat={valueLabelFormat}
          {...SliderProps}
          value={value}
          onChange={onChangeSlider}
        />
      </Box>
    </BasePopover>
  )
}
