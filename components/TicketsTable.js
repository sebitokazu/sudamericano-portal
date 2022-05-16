export default function TicketsTable() {
  return (
    <table className="w-full text-sm text-left text-white">
      <thead className="text-xs text-center text-white uppercase  bg-suda-blue">
        <tr>
          <th scope="col" className="px-6 py-3">
            Categoria
          </th>
          <th scope="col" className="px-6 py-3">
            Precio
          </th>
          <th scope="col" className="px-6 py-3">
            Incluye
          </th>
          <th scope="col" className="px-6 py-3">
            Control
          </th>
          <th scope="col" className="px-6 py-3">
            Contacto
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700 text-center">
          <th
            scope="row"
            className="px-6 py-4 font-semibold text-base text-white whitespace-nowrap"
          >
            Diaria
          </th>
          <td className="px-6 py-4">
            U$6 <br /> $800
          </td>
          <td className="px-6 py-4">1 jornada</td>
          <td className="px-6 py-4">Entrada en mano</td>
          <td className="px-6 py-4">En la boleteria al ingreso</td>
        </tr>
        <tr className="border-b bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700 text-center">
          <th
            scope="row"
            className="px-6 py-4 font-semibold text-base text-white whitespace-nowrap"
          >
            Diaria anticipada
          </th>
          <td className="px-6 py-4">
            U$5 <br /> $700
          </td>
          <td className="px-6 py-4">1 jornada con fecha asignada</td>
          <td className="px-6 py-4">Admision por lista y pulsera</td>
          <td className="px-6 py-4">
            <a
              href="https://wa.me/5491156093363?text=Hola!%20Quisiera%20consultar%20por%20la%20entrada%20Diaria%20Anticipada.%20Muchas%20Gracias!"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-lime-300  hover:underline"
            >
              Wpp: +54 9 1156093363
            </a>
          </td>
        </tr>
        <tr className="border-b bg-gray-800 border-gray-700  odd:bg-gray-800 even:bg-gray-700 text-center">
          <th
            scope="row"
            className="px-6 py-4 font-semibold text-basetext-white whitespace-nowrap"
          >
            Fin de Semana 2+1
          </th>
          <td className="px-6 py-4">
            U$10 <br /> $1500
          </td>
          <td className="px-6 py-4">
            3 jornadas <br /> 3,4 y 5 de junio ó <br /> 4,5 + (1 a eleccion)
          </td>
          <td className="px-6 py-4">Admision por lista y pulsera</td>
          <td className="px-6 py-4">
            <a
              href="https://wa.me/5491126486319?text=Hola!%20Quisiera%20consultar%20por%20la%20entrada%20Fin%20de%20Semana%202%2B1.%20Muchas%20Gracias!"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-lime-300  hover:underline"
            >
              Wpp: +54 9 1126486319
            </a>
          </td>
        </tr>
        <tr className="border-b bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700 text-center">
          <th
            scope="row"
            className="px-6 py-4 font-semibold text-base whitespace-nowrap"
          >
            Fan Kit
          </th>
          <td className="px-6 py-4">
            U$30 <br /> $3750
          </td>
          <td className="px-6 py-4">
            Abono total <br /> 4 al 11 de junio + 1 remera
          </td>
          <td className="px-6 py-4">Admision por lista y pulsera</td>
          <td className="px-6 py-4">
            <a
              href="https://wa.me/5491126486319?text=Hola!%20Quisiera%20consultar%20por%20el%20Fan%20Kit.%20Muchas%20Gracias!"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-lime-300 hover:underline"
            >
              Wpp: +54 9 1126486319
            </a>
          </td>
        </tr>
        <tr className="border-b bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700 text-center">
          <th
            scope="row"
            className="px-6 py-4 font-semibold text-base text-white whitespace-nowrap"
          >
            Play Off
          </th>
          <td className="px-6 py-4">
            U$12 <br /> $1800
          </td>
          <td className="px-6 py-4">10 y 11 de junio</td>
          <td className="px-6 py-4">Admision por lista y pulsera</td>
          <td className="px-6 py-4">
            <a
              href="https://wa.me/5491126486319?text=Hola!%20Quisiera%20consultar%20por%20la%20entrada%20Play%20Off.%20Muchas%20Gracias!"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-lime-300 hover:underline"
            >
              Wpp: +54 9 1126486319
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
