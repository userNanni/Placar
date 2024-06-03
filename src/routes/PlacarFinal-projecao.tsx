import { SimpleGrid, Heading } from "@chakra-ui/react";
import CardFinal from "../components/cardFinal.tsx";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://simplyheron.fly.dev");

interface participantesTypes {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  imageSrc: string;
  name: string;
  score: number;
  updated: string;
}

function PlacarFinalProjecao() {
  const [participantes, setParticipantes] = useState<participantesTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const apiResponse = await fetch(
      "https://simplyheron.fly.dev/api/collections/participantes/records?sort=-score&&perPage=3"
    );
    const data = await apiResponse.json();
    console.log(data.items);
    setParticipantes(data.items);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  pb.collection("participantes").subscribe("*", function () {
    fetchData();
  });

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
            templateColumns="1fr"
          >
            {participantes.map((participante, ind) => (
              <Reorder.Item key={participante?.id} value={participante?.score}>
                <CardFinal
                  Classification={ind + 1 + "º"}
                  ImageSrc={`https://simplyheron.fly.dev/api/files/${participante?.collectionId}/${participante?.id}/${participante?.imageSrc}`}
                  Name={participante?.name}
                  Score={participante?.score}
                />
              </Reorder.Item>
            ))}
          </SimpleGrid>
        </Reorder.Group>
      </AnimatePresence>
    </div>
  );
}

export default PlacarFinalProjecao;
