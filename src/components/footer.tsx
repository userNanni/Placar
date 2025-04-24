import { Heading } from "@chakra-ui/react";
import { text } from "../content/text.tsx";

export function footer() {
  return (
    <footer>
      <div className="container">
        <Heading size="2xl">{text.titleShort}</Heading>
      </div>
      <img
        className="logo"
        src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/simbolo%20OHMA.png?raw=true"
        alt="logo"
      />
      <div className="container">
        <a href="https://www.youtube.com/@AFAMilitar">
          <img
            src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/youtube.png?raw=true"
            width={60}
            alt="youtube"
          />
        </a>
        <a href="https://www.instagram.com/afamilitar/">
          <img
            src="https://github.com/userNanni/Placar/blob/10f62f35e067a4b4558087a1034ce00cbbe5c436/src/assets/instagram.png?raw=true"
            width={60}
            alt="instagram"
          />
        </a>
      </div>
    </footer>
  );
}
