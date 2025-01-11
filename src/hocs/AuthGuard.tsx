'use server'
// Third-party Imports
import type { ChildrenType } from '@core/types'

import { getServerSession } from 'next-auth'

import AuthRedirect from '@/components/AuthRedirect'
import { authOptions } from '@/libs/auth'
import SetUser from '@/contexts/setUser'
// Component Imports
export default async function AuthGuard({ children }: ChildrenType) {
  const session = await getServerSession(authOptions)

  return <>{session ? <SetUser session={session}>{children}</SetUser> : <AuthRedirect />}</>
}
