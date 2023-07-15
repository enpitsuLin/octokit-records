'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import clsx from 'clsx'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      border="~ rounded-md" shadow="md"
      bg="popover" text="popover-foreground"
      animated="~ duration-75 data-[side=bottom]:fade-in-up data-[side=left]:fade-in-right data-[side=right]:fade-in-left data-[side=top]:fade-in-down"
      className={clsx('z-50 w-72 p-4', className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
