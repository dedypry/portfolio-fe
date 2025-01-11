// Third-party Imports
import type { HorizontalNavProps } from '../../components/horizontal-menu/HorizontalNav'

import styled from '@emotion/styled'

// Type Imports

const StyledHorizontalNav = styled.div<Pick<HorizontalNavProps, 'customStyles'>>`
  inline-size: 100%;
  overflow: hidden;
  position: relative;
  ${({ customStyles }) => customStyles}
`

export default StyledHorizontalNav
