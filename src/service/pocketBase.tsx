import PocketBase from "pocketbase";
import { Participante } from "../domain/models.tsx";

const pb = new PocketBase("https://simplyheron.fly.dev");

export const PocketBaseService = {
  async fetchParticipantes(): Promise<Participante[]> {
    const response = await pb
      .collection("participantes")
        .getList(1, 10, { sort: "-score" });
        
        const result = response.items.map((item) => ({
            imageSrc: item.imageSrc,
            name: item.name,
            score: item.score,
        })) as Participante[];
    
    console.log(result);

    return result;
  },

  subscribeToParticipantes(callback: () => void) {
    pb.collection("participantes").subscribe("*", callback);
  },
};