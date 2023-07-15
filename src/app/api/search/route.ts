export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const data = await fetch(`https://neodb.social/api/catalog/search?query=${name}`)
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
}
