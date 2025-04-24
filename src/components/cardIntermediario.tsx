import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";


import { participanteCardProps } from "../domain/models.tsx";

function cardIntermediario(props: participanteCardProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      display="grid"
      overflow="hidden"
      variant="outline"
      padding="10px"
      borderRadius={20}
      alignItems="center"
      gridTemplateColumns="1fr 1fr 2fr"
    >
      <CardBody>
        <Stat>
          <StatNumber fontSize={60} fontWeight={700}>
            {props.Classification}
          </StatNumber>
          <StatLabel fontSize={25} fontWeight={500}>
            Pontuação
          </StatLabel>
          <StatNumber fontSize={60} fontWeight={700}>
            {props.Score}
          </StatNumber>
        </Stat>
      </CardBody>
      <Image
        objectFit="cover"
        borderRadius="10px"
        h={250}
        w={200}
        src={props.ImageSrc}
        alt=""
      />
      <CardHeader fontSize={40} fontWeight={700}>
        {props.Name}
      </CardHeader>
    </Card>
  );
}

export default cardIntermediario;
