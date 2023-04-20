import React from "react";
import "./App.css";
import { Button, FancyButton } from "./components/Button/Button";
import { SWRConfig } from "swr";
import Match from "./modules/Match/Match";

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <div className="App">DEMO</div>
      <Button>PRESS HERE</Button>
      <FancyButton className="tomato">PRESS HERE</FancyButton>
      <Match id={7693131}/>
    </SWRConfig>
  );
}

export default App;
