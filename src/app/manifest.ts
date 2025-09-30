import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Carlos Gabriel Mercado Jimenez - Portfolio',
    short_name: 'Carlos Portfolio',
    description: 'Full Stack Developer & Game Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00ff41',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}