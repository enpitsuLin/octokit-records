import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, ...rest } = props
    return (
      <textarea {...rest}
        ref={ref}
        p="x-3 y-2" flex="~" w-full=""
        border="~ rounded input" bg="background"
        text="sm placeholder:muted-foreground" outline="focus-visible:none"
        ring="offset-background focus-visible:2 focus-visible:ring focus-visible:offset-2"
        resize="none"
        className={cn(
          'min-h-80px disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      />
    )
  },
)
