import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <section id="#sponsors">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="text-2xl font-bold text-white ">
              Nos acompañan
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center mx-auto gap-4  lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <Image
                src="/nacion-logo.png"
                alt="Argentina Secretaria Deportes Logo"
                className="block object-contain h-16 greyC"
                width="250"
                height="250"
              />
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <Image
                src="/matanza-logo.png"
                alt="La Matanza Secretaria Deportes Logo"
                className="block object-contain h-16 greyC"
                width="225"
                height="225"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/cas-logo.png"
                alt="Confederacion Argentina Softbol Logo"
                className="block object-contain h-16 greyC"
                width="125"
                height="125"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/wbsc-logo.png"
                alt="World Baseball Softball Confederation Logo"
                className="block object-contain h-16 greyC"
                width="175"
                height="175"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/asba-logo.png"
                alt="Asociacion Softbol Buenos Aires Logo"
                className="block object-contain h-16 greyC"
                width="150"
                height="150"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/tornado-blanco-logo.png"
                alt="Tornado Logo"
                className="block object-contain h-16 greyC"
                width="125"
                height="125"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/estadio-victoria-logo.png"
                alt="Estadio de la Victoria Logo"
                className="block object-contain h-16 greyC"
                width="150"
                height="150"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contacto"></section>
      <div className="flex flex-row justify-center mt-4">
        <Image
          src="/logo.png"
          alt="Sudamericano Logo"
          width={250}
          height={250}
        />
      </div>
    </footer>
  );
}
