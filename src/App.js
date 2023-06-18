import jsonData from "./data/data.json";

function App() {
  return (
    <nav className={` my-10 w-max m-auto rounded-lg ${jsonData.navbarColor}`}>
      <ul className="flex flex-row  ">
        {jsonData.buttons.map((buttons, index) => (
          <li key={index} className="flex flex-col  group relative">
            <a
              href={buttons.link}
              className={`hover:bg-slate-800 text-3xl py-8 px-20 cursor-pointer  ${buttons.css}`}
            >
              {buttons.text}
            </a>
            {typeof buttons.parentButton === "object" ? (
              <ul className="hidden group-hover:flex flex-col pt-28 text-white absolute w-full text-center">
                {buttons.parentButton.map((parentButton, index) => (
                  <li
                    key={index}
                    className="flex flex-col pb-1 group/childButtons "
                  >
                    <a
                      href="/childButtons"
                      className="border-2 py-5  text-lg bg-slate-700 hover:bg-slate-600"
                    >
                      {parentButton.text}
                    </a>
                    {typeof parentButton.childButtons === "object" ? (
                      <ul className="hidden group-hover/childButtons:flex flex-col pb-2 ">
                        {parentButton.childButtons.map(
                          (childButtons, index) => (
                            <li key={index} className="flex">
                              <a
                                href="/deneme"
                                className="w-full text-base border-2 py-3 bg-slate-500 hover:bg-slate-400"
                              >
                                {childButtons.text}
                              </a>
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
