'use client'

// React Imports
import type { ChipProps } from '@mui/material/Chip'

import React from 'react'

// Mui Imports
import MuiChip from '@mui/material/Chip'
import { styled } from '@mui/material'

export type CustomChipProps = ChipProps & {
  round?: 'true' | 'false'
}

const Chip = styled(MuiChip)<CustomChipProps>(({ round }) => {
  return {
    ...(round === 'true' && {
      borderRadius: 500
    })
  }
})

const CustomChip = (props: CustomChipProps) => <Chip {...props} />

export default CustomChip
