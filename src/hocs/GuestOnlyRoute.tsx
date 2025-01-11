/* eslint-disable import/order */
// Next Imports
import type { ChildrenType } from '@core/types'

import { redirect } from 'next/navigation'

// Third-party Imports
import { getServerSession } from 'next-auth'

// Type Imports

// Config Imports
import themeConfig from '@configs/themeConfig'

const GuestOnlyRoute = async ({ children }: ChildrenType) => {
  const session = await getServerSession()

  if (session) {
    redirect(themeConfig.homePageUrl)
  }

  return <>{children}</>
}

export default GuestOnlyRoute
