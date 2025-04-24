import { Heading } from "@chakra-ui/react";
import "./Home.scss";
import { text } from "../content/text.tsx";

function ErrorPage() {
  return (
    <div className="errorPage">
      <Heading>{text.title}</Heading>
      Desculpe ... ocorreu um erro
    </div>
  );
}

export default ErrorPage;
