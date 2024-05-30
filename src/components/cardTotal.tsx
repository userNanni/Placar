import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

interface participante {
  Classification: string;
  Score: number;
  ImageSrc: string;
  Name: string;
}

function cardTotal(props: participante) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      display="grid"
      overflow="hidden"
      variant="outline"
      padding="10px"
      borderRadius={20}
      alignItems="center"
      justifyItems="center"
      gridTemplateColumns="1fr 1fr 2fr 3fr"
    >
      <CardBody>
        <Stat>
          <StatNumber fontWeight={700}>{props.Classification}</StatNumber>
        </Stat>
      </CardBody>
      <Stat margin={5}>
        <StatLabel fontWeight={500}>Pontuação</StatLabel>
        <StatNumber fontWeight={700}>{props.Score}</StatNumber>
      </Stat>
      <Image
        objectFit="cover"
        borderRadius="10px"
        width="20vw"
        height="20vw"
        src={props.ImageSrc}
        alt=""
      />
      <CardHeader fontWeight={700}>{props.Name}</CardHeader>
    </Card>
  );
}

export default cardTotal;
