import FlipCountdown from "@rumess/react-flip-countdown";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="text-gray-600 body-font pt-10">
      <section id="main-title">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
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
          <div className="py-6 font-semibold text-slate-300">
            <FlipCountdown
              size="medium"
              theme="dark"
              hideYear
              hideMonth
              endAtZero
              dayTitle='Dias'
              hourTitle='Horas'
              minuteTitle='Minutos'
              secondTitle='Segundos'
              endAt={"2022-06-04 00:00:00"} // Date/Time
            />
          </div>
        </div>
      </section>
      <section id="equipos">
        <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-100 lg:text-7xl md:text-6xl">
          Equipos
        </h2>
        <br></br>
        {/* <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Here is our collection of free to use templates made with Next.js &
          styled with Tailwind CSS.
        </p> */}
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
      </section>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <Link
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
