import { Heading, Image } from "@chakra-ui/react";

import "./Home.scss";
import { footer } from "../components/footer.tsx";
import { header } from "../components/header.tsx";
import { text } from "../content/text.tsx";

function Home() {
  return (
    <>
      {header()}
      <>
        <section className="placares">
          <a
            className="placarIntermediario"
            href="/PlacarIntermediario-Projecao"
          >
            Placar 1º Dia
          </a>
          <a className="placarFinal" href="/PlacarFinal-Projecao">
            Placar 2º Dia
          </a>
        </section>
      </>
      <>
        <div className="aboutBackground">
          <Heading className="titleAbout">Sobre o Evento</Heading>
        </div>
      </>
      <section className="about">

          <Image
            className="aboutImage"
            src="https://github.com/userNanni/Placar/blob/2d39c3877b05487770c11fce8c1acf42c8bd6b6e/public/banner-ohma-horizontal.jpeg?raw=true"
            width={540}
          ></Image>

        <div className="textAbout">
          <p>
            {text.about}
          </p>
          <a
            href="/Placar"
            className="youtubeBtn"
          >
            <p>Placar Total</p>
          </a>
        </div>
      </section>
      {footer()}
    </>
  );
}

export default Home;
