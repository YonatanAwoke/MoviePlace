import { Inter } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import { Key } from 'react'
import Movie from './Movie'


const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets:['latin'], variable:"--font-montserrat"})


export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <main className={`${montserrat.className} mx-32 my-16` }>
      
    <div className='grid gap-16 grid-cols-fluid'>

    {res.results.map((movie: { id: Key | null | undefined; title: any; poster_path: any; release_date: any }) => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      
      />
    ))}
    </div>
    
    </main>
  )
}
