export default function EventosPage() {
  return (
    <section className="p-8 text-center bg-[#f4f4f5] min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Eventos e Experiências</h1>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Um dos eventos mais marcantes foi a <strong>Semana Tech da Energisa</strong>, onde participei de palestras e debates sobre temas como <strong>inteligência artificial</strong>, <strong>governança de dados</strong> e <strong>MLOps</strong>. A experiência ampliou minha visão sobre o futuro da tecnologia e fortaleceu meu interesse pela área.
      </p>

      <ul className="space-y-4 max-w-xl mx-auto mb-8">
        <li className="bg-white p-4 shadow rounded text-gray-800">
          <strong>Semana Tech - Energisa</strong> <br />
          Julho de 2025 – Online / Presencial Cataguases-mg (Rio Pomba Valley)
        </li>
        <li className="bg-white p-4 shadow rounded text-gray-800">
          <strong>Grand Prix</strong> <br />
          julho de 2025 – Senai Cataguases-mg
        </li>
        <li className="bg-white p-4 shadow rounded text-gray-800">
          <strong>Encontro com Gustavo Botelho</strong> <br />
          Julho de 2025 – Anfiteatro Energisa Cataguases-mg
        </li>
      </ul>

      <button className="text-sm px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
        Ver mais eventos
      </button>
    </section>
  )
}
