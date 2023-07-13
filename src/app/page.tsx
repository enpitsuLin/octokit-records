import { getRecord } from '@/lib/gist'
import { Card } from '@/components/Card'

const Home: React.FC = async () => {
  // const { data, error } = useSWR<ApiResponse>('/api/get-records', fetcher)
  const data = await getRecord()
  return (
    <div
      bg="neutral-4/30 dark:neutral-7/30"
      border="rounded-2xl"
      p="x-8 y-12" m="-auto y-20"
      className="backdrop-filter backdrop-blur-lg"
    >
      {
        data.map(i => <Card {...i}/>)
      }
    </div>
  )
}

export default Home
