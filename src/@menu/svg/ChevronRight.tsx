// React Imports
import type { SVGAttributes } from 'react'

const ChevronRight = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg fontSize='1.5rem' height='1em' viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z' fill='currentColor' />
    </svg>
  )
}

export default ChevronRight
