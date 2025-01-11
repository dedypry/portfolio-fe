'use client'

// React Imports
import type { LinkProps } from 'next/link'
import type { ChildrenType } from '../types'

import { forwardRef } from 'react'

// Next Imports
import Link from 'next/link'

// Type Imports

type RouterLinkProps = LinkProps &
  Partial<ChildrenType> & {
    className?: string
  }

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  // Props
  const { href, className, ...other } = props

  return (
    <Link ref={ref} className={className} href={href} {...other}>
      {props.children}
    </Link>
  )
})
