'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Menu() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm flex justify-center gap-4 p-4 z-50">
      {[
        { name: 'Contato', path: '/contato' },
        { name: 'Produtos', path: '/produtos' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Clientes', path: '/clientes' },
        { name: 'Sobre nós', path: '/sobre-nos' }
      ].map((item) => (
        <Link key={item.path} href={item.path} passHref>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 border-gray-300 text-gray-800 hover:bg-gray-100 transition"
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
