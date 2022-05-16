import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <section id="#sponsors">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="mb-8 text-2xl font-bold text-white ">
              Nos acompañan
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center mx-auto gap-4  lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Argentina Secretaria Deportes Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="La Matanza Secretaria Deportes Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="CAS Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="WBSC Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="ASBA Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Tornado Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Estadio de la Victoria Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto"></section>
      <div className="flex flex-row justify-center">
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
