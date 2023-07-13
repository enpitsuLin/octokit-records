import { getRecord } from '@/lib/gist'
import { Card } from '@/components/Crad'

const Home: React.FC = async () => {
  // const { data, error } = useSWR<ApiResponse>('/api/get-records', fetcher)
  const data = await getRecord()
  return (

    <>
      {data.map(item => (
        <Card {...item}/>
      ))}
    </>
  )
}

export default Home
