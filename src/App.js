import { useState } from "react";
import jsonData from "./data/data.json";

function App() {
  return (
    <nav className="px-56 py-10">
      <ul className="flex flex-row justify-between">
        {jsonData.buttons.map((buttons, index) => (
          <li key={index} className={buttons.css}>
            <a href="">{buttons.text}</a>
            {typeof buttons.parentButton === "object" ? (
              <ul>
                {buttons.parentButton.map((parentButton, index) => (
                  <li key={index}>
                    <a href="">{parentButton.text}</a>
                    {typeof parentButton.childButtons === "object" ? (
                      <ul>
                        {parentButton.childButtons.map(
                          (childButtons, index) => (
                            <li key={index}>
                              <a href="">{childButtons.text}</a>
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default App;
