import { SimpleGrid, Heading } from "@chakra-ui/react";
import CardFinal from "../components/cardFinal.tsx";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

function PlacarFinal() {
  const [participantes, setParticipantes] = useState([
    {
      collectionId: "58cs73cdsxsyov3",
      collectionName: "participantes",
      created: "2024-03-05 20:21:11.372Z",
      id: "78tcng9e7l1roft",
      imageSrc: "mascarenhas_zzQC0HKAzk.jpg",
      name: "Mal. Mascarenhas de Moraes",
      score: 327,
      updated: "2023-05-17 20:26:14.325Z",
    },
    {
      collectionId: "58cs73cdsxsyov3",
      collectionName: "participantes",
      created: "2024-03-05 20:19:13.691Z",
      id: "d7ecb8jkfxc4f8r",
      imageSrc: "lydia_InRlngulEc.jpg",
      name: "Ten. Lydia Litvyak",
      score: 242,
      updated: "2023-05-17 20:27:38.603Z",
    },
    {
      collectionId: "58cs73cdsxsyov3",
      collectionName: "participantes",
      created: "2024-03-05 20:21:41.156Z",
      id: "jq2rrwj0wpxe907",
      imageSrc: "danilo_moura_MG0I7u1eju.jpg",
      name: "Ten. Danilo Moura",
      score: 213,
      updated: "2023-05-17 20:27:27.766Z",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
      console.log("updated");
    }, 5000);
    return () => clearInterval(interval);
  }, [participantes]);

  const fetchData = async () => {
    const apiResponse = await fetch(
      "https://simplyheron.fly.dev/api/collections/participantes/records?perPage=3"
    );
    const data = await apiResponse.json();
    console.log(data.items);
    setParticipantes(data.items);
  };

  return (
    <div className="Placar">
      <AnimatePresence>
        <Heading
          fontSize={60}
          background="linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);"
          backgroundClip="text"
          textShadow="2px 2px 0px white, 2px 2px 10px black, #FC0 1px 0 10px"
          userSelect="none"
          margin={10}
        >
          X Olimpíada de História Militar Aeronáutica
        </Heading>
        <Reorder.Group
          values={participantes}
          onReorder={setParticipantes}
          dragListener={false}
        >
          <SimpleGrid
            as={motion.div}
            spacing={5}
            columns={2}
            templateColumns="1fr"
          >
            {participantes.map((participante, ind) => (
              <Reorder.Item key={participante.id} value={participante.score}>
                <CardFinal
                  key={participante.id}
                  Classification={ind + 1 + "º"}
                  ImageSrc={`https://simplyheron.fly.dev/api/files/${participante.collectionId}/${participante.id}/${participante.imageSrc}`}
                  Name={participante.name}
                  Score={participante.score}
                />
              </Reorder.Item>
            ))}
          </SimpleGrid>
        </Reorder.Group>
      </AnimatePresence>
    </div>
  );
}

export default PlacarFinal;
