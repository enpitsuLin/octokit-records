/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['"m.media-amazon.com"'].concat(
      Array.from({ length: 10 }, (_, i) => i + 1).map((i) => `img${i}.doubanio.com`)
    )
  }
}

export default config
