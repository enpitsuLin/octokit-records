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
    <form onSubmit={handleSubmit((data) => {
      startTransition(() => {
        createRecord(data)
      })
    })}
    >
      <label htmlFor="title">Title</label>
      <input {...register('title', { required: true })} />
      {errors.title && <p>Title is required.</p>}

      <label htmlFor="type">Type</label>
      <input {...register('type', { required: true })} />
      {errors.type && <p>Type is required.</p>}

      <label htmlFor="year">Year</label>
      <input {...register('year', { required: true })} />
      {errors.year && <p>Year is required.</p>}

      <label htmlFor="cover">Cover</label>
      <input {...register('cover', { required: true })} />
      {errors.cover && <p>Cover is required.</p>}

      <label htmlFor="score">Score</label>
      <input {...register('score', { required: true })} />
      {errors.score && <p>Score is required.</p>}

      <label htmlFor="date">Date</label>
      <input {...register('date', { required: true })} />
      {errors.date && <p>Date is required.</p>}

      <label htmlFor="comment">Comment</label>
      <textarea {...register('comment')} />

      <button type="submit" disabled={isPending} >
        Submit
      </button>
    </form>
  )
}
