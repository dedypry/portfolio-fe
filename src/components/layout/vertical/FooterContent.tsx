/* eslint-disable import/order */
'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span className='text-textSecondary'>{` by `}</span>
        <Link className='text-primary uppercase' href='https://pixinvent.com' target='_blank'>
          Pixinvent
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link className='text-primary' href='https://themeforest.net/licenses/standard' target='_blank'>
            License
          </Link>
          <Link className='text-primary' href='https://themeforest.net/user/pixinvent/portfolio' target='_blank'>
            More Themes
          </Link>
          <Link
            className='text-primary'
            href='https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation'
            target='_blank'
          >
            Documentation
          </Link>
          <Link className='text-primary' href='https://pixinvent.ticksy.com' target='_blank'>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
