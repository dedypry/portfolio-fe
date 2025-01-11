// React imports
import type { ElementType } from 'react'
import type { AutocompleteProps } from '@mui/material/Autocomplete'

import { forwardRef } from 'react'

// MUI imports
import Paper from '@mui/material/Paper'
import Autocomplete from '@mui/material/Autocomplete'

const CustomAutocomplete = forwardRef(
  <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends ElementType
  >(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    ref: any
  ) => {
    return (
      // eslint-disable-next-line lines-around-comment
      <Autocomplete
        {...props}
        ref={ref}
        slots={{
          paper: props => <Paper {...props} />
        }}
      />
    )
  }
) as typeof Autocomplete

export default CustomAutocomplete
