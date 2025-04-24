import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  AspectRatio,
  DarkMode,
} from "@chakra-ui/react";

import { participanteCardProps } from "../domain/models.tsx";

function cardTotal(props: participanteCardProps) {
  return (
    <DarkMode>
      <Card
        direction={{ base: "column", sm: "row" }}
        display="grid"
        overflow="hidden"
        variant="outline"
        padding="10px"
        borderRadius={[10, 20]}
        textAlign="center"
        alignItems="center"
        justifyItems="center"
        gridTemplateColumns="1fr 1fr 1fr 2.5fr"
      >
        <CardBody margin={0} padding={0}>
          <Stat>
            <StatNumber
              fontSize={["2xl", "3xl", "4xl", "6xl"]}
              fontWeight={700}
            >
              {props.Classification}
            </StatNumber>
          </Stat>
        </CardBody>
        <Stat margin={0} padding={0}>
          <StatNumber fontSize={["xl", "2xl", "3xl", "5xl"]} fontWeight={700}>
            {props.Score}
          </StatNumber>
          <StatLabel
            fontSize={["md", "lg", "xl", "2xl", "3xl", "4xl"]}
            fontWeight={500}
          >
            Pontos
          </StatLabel>
        </Stat>
        <AspectRatio
          minW={[50, 100, 150, 200]}
          ratio={3 / 4}
          alignContent="center"
          margin={0}
          padding={0}
        >
          <Image
            objectFit="cover"
            borderRadius="10px"
            width="20vw"
            height="20vw"
            src={props.ImageSrc}
            alt=""
          />
        </AspectRatio>
        <CardHeader
          fontSize={["xl", "2xl", "3xl", "5xl"]}
          fontWeight={700}
          margin={0}
          padding={0}
        >
          {props.Name}
        </CardHeader>
      </Card>
    </DarkMode>
  );
}

export default cardTotal;
