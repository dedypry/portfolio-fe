// Third-party Imports
import type { RootStylesType } from '../../types'

import styled from '@emotion/styled'

// Type Imports

const StyledHorizontalSubMenuContentWrapper = styled.div<RootStylesType>`
  z-index: 10;

  ${({ rootStyles }) => rootStyles};
`

export default StyledHorizontalSubMenuContentWrapper
