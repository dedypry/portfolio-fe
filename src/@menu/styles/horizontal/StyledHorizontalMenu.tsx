// Third-party Imports
import type { MenuProps } from '../../components/vertical-menu/Menu'

import styled from '@emotion/styled'

// Type Imports

// Util Imports
import { menuClasses } from '../../utils/menuClasses'

const StyledHorizontalMenu = styled.nav<Pick<MenuProps, 'rootStyles'>>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledHorizontalMenu
