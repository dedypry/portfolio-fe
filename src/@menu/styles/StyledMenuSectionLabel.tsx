// Third-party Imports
import type { RootStylesType } from '../types'

import styled from '@emotion/styled'

// Type Imports

type StyledMenuSectionLabelProps = RootStylesType & {
  isCollapsed?: boolean
  isHovered?: boolean
  textTruncate?: boolean
}

const StyledMenuSectionLabel = styled.span<StyledMenuSectionLabelProps>`
  ${({ textTruncate }) =>
    textTruncate &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
  ${({ isCollapsed, isHovered }) =>
    !isCollapsed || (isCollapsed && isHovered)
      ? `
flex-grow: 1;
`
      : ''}
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuSectionLabel
