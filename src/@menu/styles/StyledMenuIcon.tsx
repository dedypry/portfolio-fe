// Third-party Imports
import type { RootStylesType } from '../types'

import styled from '@emotion/styled'

// Type Imports

const StyledMenuIcon = styled.span<RootStylesType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuIcon
