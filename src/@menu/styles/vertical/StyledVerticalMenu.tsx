// Third-party Imports
import type { MenuProps } from '../../components/vertical-menu/Menu'

import styled from '@emotion/styled'

// Type Imports

// Util Imports
import { menuClasses } from '../../utils/menuClasses'

const StyledVerticalMenu = styled.nav<Pick<MenuProps, 'rootStyles'>>`
  & > ul > :first-of-type {
    margin-block-start: 0;
  }
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledVerticalMenu
