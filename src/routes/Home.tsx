import { Heading, Image, Center } from "@chakra-ui/react";

import "./Home.scss";

function Home() {
  return (
    <>
      <Center className="header" w="full">
        <div className="textAndLogo">
          <a className="logoWrap" href="/">
            <img
              className="logo"
              src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/simbolo%20OHMA.png?raw=true"
              alt="Simbolo OHMA"
            />
          </a>

          <div className="titleBackground">
            <Heading className="titleLong">
              X Olímpiada de História Militar Aeronáutica
            </Heading>
            <Heading className="titleShort">X OHMA</Heading>
          </div>
        </div>
      </Center>
      <>
        <section className="placares">
          <a className="placarIntermediario" href="/PlacarIntermediario">
            Placar 1º Dia
          </a>
          <a className="placarFinal" href="/PlacarFinal">
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
            Nos dias 15 e 16 de maio de 2024, a Academia da Força Aérea (AFA)
            sediará a X Olimpíada de História Militar e Aeronáutica. Mais do que
            uma competição, a Olimpíada visa estimular o estudo e a pesquisa
            nessas áreas, reconhecendo sua importância na formação de futuros
            oficiais da Força Aérea Brasileira. O evento conta com a
            participação de equipes de outras escolas militares, promovendo o
            intercâmbio e a interoperabilidade entre as instituições.
          </p>
          <a
            href="https://youtube.com/live/phR6a_cFCz0?feature=share"
            className="youtubeBtn"
          >
            <img
              className="playbtn"
              src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/play.svg?raw=true"
              alt=""
            />
            <p>Assista ao Vivo</p>
          </a>
        </div>
      </section>
      <footer>
        <div className="container">
          <Heading size="2xl">X OHMA</Heading>
        </div>
        <img
          className="logo"
          src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/simbolo%20OHMA.png?raw=true"
          alt=""
        />
        <div className="container">
          <a href="https://www.youtube.com/@AFAMilitar">
            <img
              src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/youtube.png?raw=true"
              width={60}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/afamilitar/">
            <img
              src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/instagram.png?raw=true"
              width={60}
              alt=""
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
