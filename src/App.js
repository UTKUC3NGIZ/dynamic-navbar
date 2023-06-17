import { useState } from "react";
import jsonData from "./data/data.json";

function App() {
  const [button, setButton] = useState(jsonData);
  console.log(button)
  console.log(button)
  return (
    <div>
      <nav>
        {button.buttons.map((deneme, index) => (
          <div key={index}>{deneme.text}</div>
        ))}
      </nav>
    </div>
  );
}

export default App;
