import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

function cardFinal(props: any) {
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
      key={props.key}
    >
      <CardBody>
        <Stat>
          <StatNumber fontSize={80} fontWeight={700}>
            {props.Classification}
          </StatNumber>
        </Stat>
      </CardBody>
      <Stat>
        <StatLabel fontSize={35} fontWeight={500}>
          Pontuação
        </StatLabel>
        <StatNumber fontSize={70} fontWeight={700}>
          {props.Score}
        </StatNumber>
      </Stat>
      <Image
        objectFit="cover"
        borderRadius="10px"
        h={250}
        w={250}
        src={props.ImageSrc}
        alt=""
      />
      <CardHeader fontSize={60} fontWeight={700}>
        {props.Name}
      </CardHeader>
    </Card>
  );
}

export default cardFinal;
