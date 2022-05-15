import FlipCountdown from "@rumess/react-flip-countdown";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="text-gray-600 body-font pt-10">
      <section id="main-title" className="h-screen">
        <div className="max-w-5xl pt-52 pb-16 mx-auto">
          <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            XV Sudamericano de Softbol Femenino Mayor
          </h1>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-slate-400 text-center">
            4 al 11 de junio
            <br />
            Estadio de la Victoria
            <br />
            Buenos Aires, Argentina
          </h2>
          <div className="py-8 font-semibold text-slate-300">
            <FlipCountdown
              size="medium"
              theme="dark"
              hideYear
              hideMonth
              endAtZero
              dayTitle="Dias"
              hourTitle="Horas"
              minuteTitle="Minutos"
              secondTitle="Segundos"
              endAt={"2022-06-04 00:00:00"} // Date/Time
            />
          </div>
          <div className="flex flex-row justify-center font-semibold  text-center pt-8">
            <Link href="#entradas">
              <button
                type="button"
                className="px-5 py-2.5 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-xl"
              >
                Consegui tus entradas
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="equipos" className="pt-40 -mt-40 mb-20">
        <div className="max-w-6xl pt-10 pb-16 mx-auto">
          <h2 className=" mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-100 lg:text-7xl md:text-6xl">
            Equipos
          </h2>
          <div className="flex flex-row flex-wrap justify-center mx-auto gap-4 max-w-s pt-16">
            <div className="ktq4 text-center">
              <Image
                alt="Bandera de Argentina"
                width="240"
                height="240"
                src="/argentina-circular.png"
              />
              <h3 className="pt-3 font-semibold text-lg text-white">
                Argentina
              </h3>
            </div>
            <div className="ktq4 text-center">
              <Image
                alt="Bandera de Brasil"
                width="240"
                height="240"
                src="/brazil-circular.png"
              />
              <h3 className="pt-3 font-semibold text-lg text-white">Brasil</h3>
            </div>
            <div className="ktq4 text-center">
              <Image
                alt="Bandera de Peru"
                width="240"
                height="240"
                src="/peru-circular.png"
              />
              <h3 className="pt-3 font-semibold text-lg text-white">Peru</h3>
            </div>
            <div className="ktq4 text-center">
              <Image
                alt="Bandera de Guatemala"
                width="240"
                height="240"
                src="/guatemala-circular.png"
              />
              <h3 className="pt-3 font-semibold text-lg text-white">
                Guatemala
              </h3>
            </div>
            <div className="ktq4 text-center">
              <Image
                alt="Bandera de Curazao"
                width="230"
                height="230"
                src="/curacao-circular.png"
              />
              <h3 className="pt-3 font-semibold text-lg text-white">Curazao</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="estadio" className="pt-40 -mt-40">
        <div className="max-w-6xl pt-12 mb-1 pb-16 mx-auto">
          <h2 className="text-2xl font-semibold tracking-tighter text-center text-gray-100 lg:text-7xl md:text-6xl">
            Estadio de la Victoria
          </h2>
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                alt="Estadio de la victoria"
                className="object-cover object-center h-full w-full"
                src="/vercel.svg"
                width="460"
                height="460"
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-lime-200 mb-5">
                  <Image
                    src="/softball-ball.png"
                    alt="Pelota de softbol"
                    className="white-icon"
                    width="30"
                    height="30"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-slate-100 text-xl font-bold mb-3">
                    Templo del Softbol
                  </h2>
                  <p className="leading-relaxed text-base text-slate-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a
                    href="https://www.instagram.com/estadiodelavictoria.softbol/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-3 text-lime-300 hover:text-cyan-100 inline-flex items-center"
                  >
                    Conoce mas
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                  <Image
                    src="/location-pin.png"
                    alt="Pin de ubicacion"
                    className="white-icon"
                    width="25"
                    height="25"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-slate-100 text-xl font-bold mb-3">
                    Como llegar
                  </h2>
                  <p className="leading-relaxed text-base text-slate-300">
                    A pata, bondi, etc...
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=estadio+de+la+victoria+-+softbol"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-3 text-lime-300 hover:text-cyan-100 inline-flex items-center"
                  >
                    Ver en Maps
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="entradas" className="pt-40 -mt-40">
        <div className="max-w-6xl pt-12 mb-1 pb-16 mx-auto">
          <h2 className="text-2xl font-semibold tracking-tighter text-center text-gray-100 lg:text-7xl md:text-6xl">
            Conseguí tus entradas
          </h2>
          <div className="container px-5 pt-12 mx-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-white dark:text-white">
                <thead className="text-xs text-center text-white uppercase bg-gray-50 dark:bg-suda-blue dark:text-white">
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-base text-gray-900 dark:text-white whitespace-nowrap"
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-base text-gray-900 dark:text-white whitespace-nowrap"
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-base text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Fin de Semana 2+1
                    </th>
                    <td className="px-6 py-4">
                      U$10 <br /> $1500
                    </td>
                    <td className="px-6 py-4">
                      3 jornadas <br /> 3,4 y 5 de junio ó <br /> 4,5 + (1 a
                      eleccion)
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-base text-gray-900 dark:text-white whitespace-nowrap"
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-base text-gray-900 dark:text-white whitespace-nowrap"
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
            </div>
          </div>
        </div>
      </section>
      <section id="redes" className="pt-40 -mt-40">
        <div className="max-w-6xl pt-12 mb-1 pb-16 mx-auto">
          <h4 className="text-xl font-semibold tracking-tighter text-center text-gray-100 lg:text-3xl md:text-2xl">
            Seguinos en nuestras redes
          </h4>
        </div>
      </section>
    </div>
  );
}
