'use client'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Label } from './ui/Label'
import { Calendar } from './ui/Calendar'
import { createRecord } from '@/lib/gist'
import type { RecordItem } from '@/types/records'
import { Button } from '@/components/ui/Button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'

export function AddRecordForm() {
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecordItem>()

  return (
    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <form
        className="w-2/3 space-y-6"
        onSubmit={handleSubmit((data) => {
          startTransition(() => {
            createRecord(data)
          })
        })}
      >
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input {...register('title', { required: true })} />
          {errors.title && <p className="text-sm text-destructive">Title is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Input {...register('type', { required: true })} />
          {errors.type && <p className="text-sm text-destructive">Type is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input {...register('year', { required: true })} />
          {errors.year && <p className="text-sm text-destructive">Year is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cover">Cover</Label>
          <Input {...register('cover', { required: true })} />
          {errors.cover && <p className="text-sm text-destructive">Cover is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="score">Score</Label>
          <Input {...register('score', { required: true })} />
          {errors.score && <p className="text-sm text-destructive">Score is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input {...register('date', { required: true })} />
          {errors.date && <p className="text-sm text-destructive">Date is required.</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment" >Comment</Label>
          <Textarea {...register('comment')} />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className={clsx(
                'w-[280px] justify-start text-left font-normal',
                'text-muted-foreground',
              )}
            >Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" side="top">
            <Calendar />
          </PopoverContent>
        </Popover>
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </div>

  )
}
