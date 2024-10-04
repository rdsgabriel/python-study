import { getSortedPostsData } from '../lib/markdown'
import BlogPosts from './BlogPosts'

export default function Home() {
  const allPostsData = getSortedPostsData().reverse()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Boca e Tiago = Experts em Python</h1>
      <BlogPosts initialPosts={allPostsData} />

      <h2 className='font-bold text-blue-600'>links:</h2>
      <a className='hover:text-blue-600' href='https://pythonspot.com/' target="_blank">Pythonspot</a>
      <br />
      <a className='hover:text-blue-600' href="https://www.w3schools.com/python/" target="_blank">W3Schools de Python</a>
      <br />
      <a className='hover:text-blue-600' href="https://docs.python.org/pt-br/3/" target="_blank">Doc oficial em PT-BR</a>
      <br />
      <br className='sm:hidden' />
      <h3 className='text-blue-600 mt-1'> e claro, pesquisa tudo no youtube e evita ao máximo usar IA (a menos que peça pra ela gerar exercícios sobre o conteúdo).</h3>

    </div>
  )
}