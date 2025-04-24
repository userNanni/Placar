import { Center, SimpleGrid } from "@chakra-ui/react";
import CardTotal from "../components/cardTotal.tsx";
import "./Placar.scss";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { header } from "../components/header.tsx";
import { footer } from "../components/footer.tsx";

import { useParticipantes } from "../service/useParticipante.tsx";
import { Participante } from "../domain/models.tsx";

function Placar() {
  
  const { participantes: fetchedParticipantes } = useParticipantes();
  const [participantes, setParticipantes] = useState<Participante[]>([]);

  useEffect(() => setParticipantes(fetchedParticipantes),[fetchedParticipantes]);

  return (
    <div>
      {header()}
      <Center w="full" className="PlacarTotal">
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
              w="full"
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
      </Center>
      {footer()}
    </div>
  );
}

export default Placar;
