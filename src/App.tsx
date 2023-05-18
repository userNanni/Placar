import "./App.css";
import { Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Heading
        fontSize={60}
        background="linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);"
        backgroundClip="text"
        textShadow="2px 2px 0px white, 2px 2px 10px black, #FC0 1px 0 10px"
        userSelect="none"
        margin={10}
      >
        9º Olimpíada de História Militar Aeronáutica
      </Heading>
      <Outlet />
    </div>
  );
}

export default App;
