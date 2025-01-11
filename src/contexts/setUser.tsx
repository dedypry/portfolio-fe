'use client'
import { Session } from 'next-auth'
import { ReactNode, useEffect } from 'react'

import { setAuth } from '@/stores/features/auth/authSlice'
import { useAppDispatch } from '@/stores/hooks'

interface Props {
  session: Session
  children: ReactNode
}
export default function SetUser({ children, session }: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAuth(session))
  }, [session])

  return <>{children}</>
}
