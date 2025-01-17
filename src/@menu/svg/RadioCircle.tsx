// React Imports
import type { SVGAttributes } from 'react'

const RadioCircle = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg fontSize='1.5rem' height='1em' viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z'
        fill='currentColor'
      />
    </svg>
  )
}

export default RadioCircle
