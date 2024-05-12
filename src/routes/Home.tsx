import { Heading, Image, Center } from "@chakra-ui/react";

import "./Home.scss";

function Home() {
  return (
    <>
      <Center className="header" w="full">
        <div className="textAndLogo">
          <a className="logoWrap" href="/home">
            <img
              className="logo"
              src="public\simbolo OHMA.png"
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
          src="src\assets\image.jpg"
          width={540}
        ></Image>
        <div className="textAbout">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            magna enim, commodo a dolor et, accumsan eleifend velit. Donec
            lectus eros, venenatis quis elit a, malesuada placerat tortor. Duis
            sit amet viverra sapien. Maecenas scelerisque turpis ut quam
            facilisis, id tempus nisi lobortis. Praesent semper nec nibh non
            mattis.
          </p>
          <a href="https://www.youtube.com/@AFAMilitar" className="youtubeBtn">
            <img
              className="playbtn"
              src="https://github.com/userNanni/Placar/blob/main/public/play.svg"
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
        <img className="logo" src="%PUBLIC%\simbolo OHMA.png" alt="" />
        <div className="container">
          <a href="">
            <img src="public\youtube.png" width={60} alt="" />
          </a>
          <a href="">
            <img src="public\instagram.png" width={60} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
