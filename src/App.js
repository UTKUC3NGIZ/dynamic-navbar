import jsonData from "./data/data.json";

function App() {
  return (
    <nav className={`px-56 py-10 ${jsonData.navbarColor}`}>
      <ul className="flex flex-row justify-between ">
        {jsonData.buttons.map((buttons, index) => (
          <li key={index} className="flex flex-col  group">
            <a
              href={buttons.link}
              className={`hover:bg-slate-800 rounded-2xl ${buttons.css}`}
            >
              {buttons.text}
            </a>
            {typeof buttons.parentButton === "object" ? (
              <ul className="hidden group-hover:flex flex-col mt-8 text-white ">
                {buttons.parentButton.map((parentButton, index) => (
                  <li key={index} className="flex flex-col mb-5 group/childButtons">
                    <a
                      href="/childButtons"
                      className="border-2 py-2 px-4 mb-2 rounded-2xl "
                    >
                      {parentButton.text}
                    </a>
                    {typeof parentButton.childButtons === "object" ? (
                      <ul className="hidden group-hover/childButtons:flex flex-col ml-12">
                        {parentButton.childButtons.map(
                          (childButtons, index) => (
                            <li
                              key={index}
                              className="border-2 mb-3 rounded-2xl px-4 py-2"
                            >
                              <a href="/deneme">{childButtons.text}</a>
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
