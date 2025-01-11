/* eslint-disable import/order */
// MUI Imports
import type { ChildrenType } from '@core/types'

import Button from '@mui/material/Button'

// Type Imports

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'
// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Header from '@components/layout/horizontal/Header'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getMode, getSystemMode } from '@core/utils/serverHelpers'
import AuthGuard from '@/hocs/AuthGuard'

const Layout = async (props: ChildrenType) => {
  const { children } = props

  // Vars
  const direction = 'ltr'
  const mode = await getMode()
  const systemMode = await getSystemMode()

  return (
    <Providers direction={direction}>
      <AuthGuard>
        <LayoutWrapper
          horizontalLayout={
            <HorizontalLayout footer={<HorizontalFooter />} header={<Header />}>
              {children}
            </HorizontalLayout>
          }
          systemMode={systemMode}
          verticalLayout={
            <VerticalLayout footer={<VerticalFooter />} navbar={<Navbar />} navigation={<Navigation mode={mode} />}>
              {children}
            </VerticalLayout>
          }
        />
        <ScrollToTop className='mui-fixed'>
          <Button
            className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
            variant='contained'
          >
            <i className='tabler-arrow-up' />
          </Button>
        </ScrollToTop>
      </AuthGuard>
    </Providers>
  )
}

export default Layout
