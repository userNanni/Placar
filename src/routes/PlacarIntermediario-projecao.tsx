import { SimpleGrid, Heading } from "@chakra-ui/react";
import CardIntermediario from "../components/cardIntermediario.tsx";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

function PlacarIntermediarioProjecao() {
  const [participantes, setParticipantes] = useState([
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-16 02:47:06.804Z",
      id: "tyi1a73aod7r8f3",
      imageSrc: "mascarenhas_6YTNDEVrSB.jpg",
      name: "Mal. Mascarenhas de Moraes",
      score: 177,
      updated: "2023-05-17 20:26:14.325Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-16 02:47:40.788Z",
      id: "xudto9skuerlr4q",
      imageSrc: "lydia_XKUOcMfyC0.jpg",
      name: "Ten. Lydia Litvyak",
      score: 122,
      updated: "2023-05-17 20:27:38.603Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-17 12:07:51.460Z",
      id: "2uqi6vgy117k5q6",
      imageSrc: "35079682546_92f77b2606_b_UMX8MKrMfQ.jpg",
      name: "Ten. Antônio João",
      score: 118,
      updated: "2023-05-17 20:27:06.566Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-16 02:48:40.600Z",
      id: "pdu7ikktsn9t0bw",
      imageSrc: "nimitz_NUCOgnfItB.jpg",
      name: "Alte. Chester Nimitz",
      score: 117,
      updated: "2023-05-17 20:25:45.824Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-17 11:49:11.546Z",
      id: "fdfc9uc49owzhj2",
      imageSrc: "duque_de_caxias_NQWo60f4IV.jpg",
      name: "Duque de Caxias",
      score: 111,
      updated: "2023-05-17 20:25:54.946Z",
    },
    {
      collectionId: "ey60rk7y1qk2tro",
      collectionName: "participantes",
      created: "2023-05-17 11:48:54.619Z",
      id: "lkhek86zbxaexo4",
      imageSrc: "danilo_750x536_zdKFEwZpHU.jpg",
      name: "Ten. Danilo Moura",
      score: 103,
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
      "https://simplyheron.fly.dev/api/collections/participantes/records?sort=-score&&perPage=6"
    );
    const data = await apiResponse.json();
    setParticipantes(data.items);
  };

  return (
    <div className="PlacarProjecao">
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
            templateColumns="1fr 1fr"
          >
            {participantes.map((participante, ind) => (
              <Reorder.Item key={participante.id} value={participante.score}>
                <CardIntermediario
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

export default PlacarIntermediarioProjecao;
