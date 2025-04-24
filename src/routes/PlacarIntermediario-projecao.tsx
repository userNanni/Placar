import { SimpleGrid, Heading } from "@chakra-ui/react";
import CardIntermediario from "../components/cardIntermediario.tsx";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useParticipantes } from "../service/useParticipante.tsx";
import { Participante } from "../domain/models.tsx";

function PlacarIntermediarioProjecao() {
  const { participantes: fetchedParticipantes } = useParticipantes();
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  console.log("PlacarIntermediarioProjecao");
  console.log(fetchedParticipantes);
  
  
  useEffect(() => setParticipantes(fetchedParticipantes),[fetchedParticipantes]);
  console.log(participantes);
  
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
              <Reorder.Item
                key={participante?.id}
                value={participante?.score}
                dragListener={false}
              >
                <CardIntermediario
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

export default PlacarIntermediarioProjecao;
