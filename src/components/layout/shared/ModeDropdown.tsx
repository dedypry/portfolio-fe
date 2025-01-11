/* eslint-disable import/order */
'use client'

// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const ModeDropdown = () => {
  // States
  const [open, setOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleClose = () => {
    setOpen(false)
    setTooltipOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleModeSwitch = (mode: Mode) => {
    handleClose()

    if (settings.mode !== mode) {
      updateSettings({ mode: mode })
    }
  }

  const getModeIcon = () => {
    if (settings.mode === 'system') {
      return 'tabler-device-laptop'
    } else if (settings.mode === 'dark') {
      return 'tabler-moon-stars'
    } else {
      return 'tabler-sun'
    }
  }

  return (
    <>
      <Tooltip
        open={open ? false : tooltipOpen ? true : false}
        slotProps={{ popper: { className: 'capitalize' } }}
        title={settings.mode + ' Mode'}
        onClose={() => setTooltipOpen(false)}
        onOpen={() => setTooltipOpen(true)}
      >
        <IconButton ref={anchorRef} className='text-textPrimary' onClick={handleToggle}>
          <i className={getModeIcon()} />
        </IconButton>
      </Tooltip>
      <Popper
        disablePortal
        transition
        anchorEl={anchorRef.current}
        className='min-is-[160px] !mbs-3 z-[1]'
        open={open}
        placement='bottom-start'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'right top' }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleClose}>
                  <MenuItem
                    className='gap-3'
                    selected={settings.mode === 'light'}
                    onClick={() => handleModeSwitch('light')}
                  >
                    <i className='tabler-sun' />
                    Light
                  </MenuItem>
                  <MenuItem
                    className='gap-3'
                    selected={settings.mode === 'dark'}
                    onClick={() => handleModeSwitch('dark')}
                  >
                    <i className='tabler-moon-stars' />
                    Dark
                  </MenuItem>
                  <MenuItem
                    className='gap-3'
                    selected={settings.mode === 'system'}
                    onClick={() => handleModeSwitch('system')}
                  >
                    <i className='tabler-device-laptop' />
                    System
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default ModeDropdown
