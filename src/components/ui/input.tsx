import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        p="x-3 y-2" flex="~" w-full=""
        border="~ rounded input file:0" bg="background file:transparent "
        text="sm file:sm placeholder:muted-foreground" outline="focus-visible:none"
        ring="offset-background focus-visible:2 focus-visible:ring focus-visible:offset-2"
        className={cn(
          'h-10 file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
