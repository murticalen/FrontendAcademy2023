import React, { useState } from "react";
import "./App.css";
import { Button, FancyButton } from "./components/Button";
import { SWRConfig } from "swr";
import { MatchDetails } from "./modules/Match/Match";

//@ts-ignore
const fetcher = (...args) =>
  //@ts-ignore
  fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("404");
    }
  });

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div className="App">
        <Button
          className="tomato"
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          PRESS ME
        </Button>
        <FancyButton
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          className="tomato"
        >
          <span className="extra-green">[]</span>
          <span>PRESS ME, BUT FANCY</span>
        </FancyButton>
        <MatchDetails id={7693131} />
        <br />
        <MatchDetails id={11137262} />
      </div>
    </SWRConfig>
  );
}

export default App;
