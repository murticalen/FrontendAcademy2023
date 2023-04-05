import "./App.css";
import { HelloWord } from "./HelloWorld";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { List } from "./List";

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <HelloWord color="red" transform="capitalize"/>
      <Counter/>
      <Counter/>
      <Clock/>
      <List/>
      <List/>
    </div>
  );
}

export default App;
