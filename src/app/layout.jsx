import './globals.css'
import Menu from './components/Menu'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="pt-20 bg-[#f4f4f5] text-gray-800">
        <Menu />
        {children}
      </body>
    </html>
  )
}
