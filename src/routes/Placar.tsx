import { SimpleGrid } from "@chakra-ui/react";
import CardTotal from "../components/cardTotal.tsx";
import "./Placar.scss";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { header } from "../components/header.tsx";
import { footer } from "../components/footer.tsx";

function Placar() {
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
  ]);

  useEffect(() => {
    fetchData();
    return;
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
                <Reorder.Item key={participante.id} value={participante.score}>
                  <CardTotal
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
      {footer()}
    </div>
  );
}

export default Placar;
