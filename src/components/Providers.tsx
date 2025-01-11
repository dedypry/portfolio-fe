/* eslint-disable import/order */
// Type Imports
import type { ChildrenType, Direction } from '@core/types'

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

// Styled Component Imports

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'

import AppReactToastify from '@/libs/styles/AppReactToastify'
import ReduxProvider from './ReduxProvider'

type Props = ChildrenType & {
  direction: Direction
}

const Providers = async (props: Props) => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = await getMode()
  const settingsCookie = await getSettingsFromCookie()
  const systemMode = await getSystemMode()

  return (
    <VerticalNavProvider>
      <SettingsProvider mode={mode} settingsCookie={settingsCookie}>
        <ThemeProvider direction={direction} systemMode={systemMode}>
          <ReduxProvider>{children}</ReduxProvider>
          <AppReactToastify hideProgressBar direction={direction} />
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
