// src/hooks/useParticipantes.ts
import { useEffect, useState } from "react";
import { Participante } from "../domain/models.tsx";
import { PocketBaseService } from "../service/pocketBase.tsx";

export function useParticipantes() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await PocketBaseService.fetchParticipantes();
    setParticipantes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    PocketBaseService.subscribeToParticipantes(fetchData);
  }, []);
    console.log("useParticipantes");
    console.log(participantes);
    
  return { participantes, loading };
}
