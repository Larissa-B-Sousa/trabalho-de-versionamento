export default function ProdutosPage() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Nossos Produtos</h1>
      <p className="text-gray-700 mb-6">Confira abaixo os principais produtos/serviços oferecidos por nós do Rio Pomba Valley</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="bg-white p-4 shadow rounded">Front-end</li>
        <li className="bg-white p-4 shadow rounded">Versionamento</li>
        <li className="bg-white p-4 shadow rounded">back-end</li>
        <li className="bg-white p-4 shadow rounded">Sites modernos e personalizados</li>
        <li className="bg-white p-4 shadow rounded">Ideias de startup</li>
        <li className="bg-white p-4 shadow rounded">Alta segurança e proteção de dados</li>
      </ul>
    </section>
  )
}
