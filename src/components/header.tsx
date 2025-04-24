import { Heading, Center } from "@chakra-ui/react";
import {text} from "../content/text.tsx";

export function header() {
  return (
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
            {text.title}
          </Heading>
          <Heading className="titleShort">X OHMA</Heading>
        </div>
      </div>
    </Center>
  );
}
