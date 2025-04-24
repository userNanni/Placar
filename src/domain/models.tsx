export interface Participante {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    imageSrc: string;
    name: string;
    score: number;
    updated: string;
}

export interface participanteCardProps {
  Classification: string;
  Score: number;
  ImageSrc: string;
  Name: string;
}