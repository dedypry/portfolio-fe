// React Imports
import type { SVGAttributes } from 'react'

const RadioCircleMarked = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg fontSize='1.5rem' height='1em' viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'
        fill='currentColor'
      />
      <path d='M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z' fill='currentColor' />
    </svg>
  )
}

export default RadioCircleMarked
