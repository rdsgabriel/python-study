// components/Layout.tsx
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Plano de Estudos
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Voltar
              </Link>
            </li>
            {/* Adicione mais links de navegação conforme necessário */}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()}  Gabriel Pica de Mel
      </footer>
    </div>
  )
}