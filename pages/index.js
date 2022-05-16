import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>XV Sudamericano de Softbol Femenino Mayor</title>
        <meta
          name="description"
          content="Sitio web del XV Sudamericano de Softbol Femenino Mayor.
        Se llevara a cabo del 4 al 11 de junio de 2022 en el Estadio de La Victoria, 
        Buenos Aires, Argentina. Contara con la participacion de las principales selecciones de la region."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="xv, sudamericano, softbol, femenino, softbol fenemino, xv sudamericano, argentina, estadio de la victoria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
