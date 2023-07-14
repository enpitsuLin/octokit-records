'use client'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { createRecord } from '@/lib/gist'
import type { RecordItem } from '@/types/records'

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
          <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Title</label>
          <input {...register('title', { required: true })}
            border="input"
            bg="transparent"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.title && <p className="text-sm text-destructive">Title is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Type</label>
          <input {...register('type', { required: true })}
            border="input"
            bg="transparent"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.type && <p className="text-sm text-destructive">Type is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="year" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Year</label>
          <input {...register('year', { required: true })}
            border="input" bg="transparent"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.year && <p className="text-sm text-destructive">Year is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="cover" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Cover</label>
          <input {...register('cover', { required: true })}
            border="input" bg="transparent"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.cover && <p className="text-sm text-destructive">Cover is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="score" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Score</label>
          <input {...register('score', { required: true })}
            border="input" bg="transparent"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.score && <p className="text-sm text-destructive">Score is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Date</label>
          <input {...register('date', { required: true })}
            p="x-3 y-2" flex="~" w-full=""
            border="~ rounded input file:0" bg="transparent file:transparent "
            text="sm file:sm placeholder:muted-foreground" outline="focus-visible:none"
            ring="offset-background focus-visible:2 focus-visible:ring focus-visible:offset-2"
            className="h-10 file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          {errors.date && <p className="text-sm text-destructive">Date is required.</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="comment" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Comment</label>
          <textarea {...register('comment')}
            p="x-3 y-2" flex="~" w-full=""
            border="~ rounded input" bg="transparent"
            text="sm placeholder:muted-foreground" outline="focus-visible:none"
            ring="offset-background focus-visible:2 focus-visible:ring focus-visible:offset-2"
            resize="none"
            className="min-h-80px disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <button type="submit" disabled={isPending}
          flex="inline items-center justify-center"
          border="rounded-md"
          text="sm"
          transition="colors"
          className="font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>

  )
}
