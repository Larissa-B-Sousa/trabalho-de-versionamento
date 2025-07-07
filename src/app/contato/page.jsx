export default function ContatoPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f5] px-6 py-16 text-gray-800 text-center">
      <h1 className="text-4xl font-semibold mb-6">Página de Contato</h1>
      <p className="max-w-lg text-gray-600 mb-8">
        Entre em contato conosco através dos canais disponíveis. Estamos aqui para ajudar.
      </p>

      <div className="max-w-md w-full mb-8">
        <p className="mb-2 text-lg"><strong>Email:</strong> larissa@gmail.com</p>
        <p className="mb-6 text-lg"><strong>Telefone:</strong> (32) 00000-0000</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
