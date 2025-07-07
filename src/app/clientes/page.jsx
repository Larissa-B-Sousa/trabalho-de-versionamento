export default function ClientesPage() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Nossos Clientes</h1>
      <p className="text-gray-700 mb-6">Conheça alguns dos nossos principais parceiros e clientes.</p>
      <ul className="flex flex-wrap justify-center gap-4">
        <li className="bg-white p-4 shadow rounded w-40">Energisa</li>
        <li className="bg-white p-4 shadow rounded w-40">Senai</li>
        <li className="bg-white p-4 shadow rounded w-40">Populos</li>
      </ul>
    </section>
  )
}
