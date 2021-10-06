import { useState } from 'react'
import { Button, Popover } from '@mui/material'

interface ButtonProps {
  id: string | undefined
  isOpen: boolean
}

interface Props {
  buttonRenderer: (buttonProps: ButtonProps) => React.ReactNode
  children:
    | React.ReactNode
    | (({ close }: { close: () => void }) => React.ReactNode)
}

export function BasePopover({ buttonRenderer, children }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? `base-popover` : undefined

  return (
    <>
      <Button
        disableRipple
        aria-describedby={id}
        style={{
          background: 'none',
          cursor: 'pointer'
        }}
        onClick={handleOpen}
      >
        {buttonRenderer({
          id,
          isOpen: open
        })}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {typeof children === 'function'
          ? children({ close: handleClose })
          : children}
      </Popover>
    </>
  )
}
