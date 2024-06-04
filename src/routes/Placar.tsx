import { SimpleGrid } from "@chakra-ui/react";
import CardTotal from "../components/cardTotal.tsx";
import "./Placar.scss";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { header } from "../components/header.tsx";
import { footer } from "../components/footer.tsx";

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

function Placar() {
  const fetchData = async () => {
    const apiResponse = await fetch(
      "https://simplyheron.fly.dev/api/collections/participantes/records?sort=-score"
    );
    const data = await apiResponse.json();
    console.log(data.items);
    setParticipantes(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  pb.collection("participantes").subscribe("*", function () {
    fetchData();
  });

  const [participantes, setParticipantes] = useState<participantesTypes[]>([]);

  return (
    <div>
      {header()}
      <div className="PlacarTotal">
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
                <Reorder.Item
                  key={participante?.id}
                  value={participante?.score}
                  dragListener={false}
                >
                  <CardTotal
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
      {footer()}
    </div>
  );
}

export default Placar;
