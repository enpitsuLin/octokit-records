import { type DetailedHTMLProps, type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type InputProps = Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, ...rest } = props
    return (
      <input {...rest}
        ref={ref}
        p="x-3 y-2" flex="~" w-full=""
        border="~ rounded input file:0" bg="background file:transparent "
        text="sm file:sm placeholder:muted-foreground" outline="focus-visible:none"
        ring="offset-background focus-visible:2 focus-visible:ring focus-visible:offset-2"
        className={cn(
          'h-10 file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      />
    )
  },
)
