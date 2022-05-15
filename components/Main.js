import FlipCountdown from "@rumess/react-flip-countdown";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Main() {
  const { width, height } = useWindowDimensions();
  return (
    <div className="text-gray-600 body-font pt-10">
      <section id="main-title" className="h-screen">
        <div className="container px-5 pt-32 mx-auto">
          <div className="flex flex-col w-full mb-2 text-center md:text-center ">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              XV Sudamericano de Softbol Femenino Mayor
            </h1>
            <br></br>
            <h2 className="text-2xl mx-auto font-4 font-semibold lh-6 ld-04 pb-11 text-slate-400 text-center">
              4 al 11 de junio
              <br />
              Estadio de la Victoria
              <br />
              Buenos Aires, Argentina
            </h2>
          </div>
        </div>
        <div className="container px-5 py-8 mx-auto lg:px-4 lg:py-4 font-semibold text-slate-300 text-xs lg:text-base">
          {width > 760 ? (
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
          ) : (
            <FlipCountdown
              size="small"
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
          )}
        </div>
        <div className="container px-5 py-8 mx-auto lg:px-4 lg:py-4 font-semibold  text-center pt-8">
          <Link href="#entradas">
            <button
              type="button"
              className="px-5 py-2.5 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-xl"
            >
              Consegui tus entradas
            </button>
          </Link>
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
              <h3 className="pt-3 font-semibold sm:text-lg text-sm text-white">
                Peru
              </h3>
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
          <div className="flex flex-row flex-wrap mx-auto justify-center py-12">
            <a
              href="https://www.instagram.com/softbol.sudamericano.argentina/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                title="Instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                className="white-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
