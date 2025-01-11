// Third-party Imports
import type { RootStylesType } from '../types'

import styled from '@emotion/styled'

// Type Imports

type StyledMenuLabelProps = RootStylesType & {
  textTruncate?: boolean
}

const StyledMenuLabel = styled.span<StyledMenuLabelProps>`
  flex-grow: 1;
  ${({ textTruncate }) =>
    textTruncate &&
    `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuLabel
