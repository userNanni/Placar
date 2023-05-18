import { SimpleGrid } from "@chakra-ui/react";
import CardFinal from "../components/cardFinal.tsx";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

function PlacarFinal() {
  const [participantes, setParticipantes] = useState([
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-16 02:47:06.804Z",
      id: "tyi1a73aod7r8f3",
      imageSrc: "mascarenhas_6YTNDEVrSB.jpg",
      name: "Mal. Mascarenhas de Moraes",
      score: 327,
      updated: "2023-05-17 20:26:14.325Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-16 02:47:40.788Z",
      id: "xudto9skuerlr4q",
      imageSrc: "lydia_XKUOcMfyC0.jpg",
      name: "Ten. Lydia Litvyak",
      score: 242,
      updated: "2023-05-17 20:27:38.603Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-17 11:48:54.619Z",
      id: "lkhek86zbxaexo4",
      imageSrc: "danilo_750x536_zdKFEwZpHU.jpg",
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
      "https://simplyheron.fly.dev/api/collections/participantes/records?sort=-score"
    );
    const data = await apiResponse.json();
    console.log(data.items);
    setParticipantes(data.items);
  };

  return (
    <>
      <AnimatePresence>
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
    </>
  );
}

export default PlacarFinal;
