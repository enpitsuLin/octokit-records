'use client'

import { useEffect, useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/components/ui/command'

export interface MediaSearchProps {
  value: string
  onSelect: (value: string) => void
}

export function MediaSearch(props: MediaSearchProps) {
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([] as { value: string; label: string }[])

  async function fetchData() {
    setLoading(true)
    const data = await fetch(`https://neodb.social/api/catalog/search?query=${searchValue}`)
      .then(async (response) => {
        const json = await response.json()
        try {
          const { data } = JSON.parse(json) as { data: any[] }
          return data
        }
        catch {
          return []
        }
      })

    setResult(data)
    setLoading(false)
  }

  useEffect(() => {
    if (searchValue)
      fetchData()
  }, [searchValue])

  return (
    <Command>
      <CommandInput
        value={searchValue}
        onValueChange={setSearchValue}
        placeholder="Search something..."
      />
      <CommandList>
        {loading && <CommandLoading>Hang on…</CommandLoading>}
        <CommandEmpty>No item found.</CommandEmpty>
        <CommandGroup>
          {result.map(item => (
            <CommandItem
              value={item.value}
              key={item.value}
              onSelect={props.onSelect}
            >
              <div
                opacity={item.value === props.value ? '100' : '0'}
                className='i-ri:check-fill mr-2 h-4 w-4'
              />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
