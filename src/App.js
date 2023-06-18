import jsonData from "./data/data.json";

function App() {
  function handleLinkClickMain(e, data) {
    if (typeof data.parentButton === "object") {
      e.preventDefault();
    }
  }
  function handleLinkClickChild(e, data) {
    if (typeof data.childButtons === "object") {
      e.preventDefault();
    }
  }
  return (
    <nav className={`${jsonData.navbarColor} md:w-max`}>
      <ul className="flex flex-row  ">
        {jsonData.buttons.map((buttons) => (
          <li
            key={buttons.order}
            className="flex flex-col relative group/main "
          >
            <a
              href={buttons.link}
              onClick={(e) => handleLinkClickMain(e, buttons)}
              className={buttons.css}
            >
              {buttons.text}
            </a>
            {typeof buttons.parentButton === "object" ? (
              <div className="hidden group-focus-within/main:!flex delay-150">
                <ul className="flex flex-col pt-2 text-white absolute w-full text-center">
                  {buttons.parentButton.map((parentButton) => (
                    <li
                      key={parentButton.order}
                      className={`flex flex-col pb-1 group/child `}
                    >
                      <a
                        onClick={(e) => handleLinkClickChild(e, parentButton)}
                        href={parentButton.link}
                        className={parentButton.css}
                      >
                        {parentButton.text}
                      </a>
                      {typeof parentButton.childButtons === "object" ? (
                        <ul className="hidden group-focus-within/child:flex  flex-col pb-2 ">
                          {parentButton.childButtons.map((childButtons) => (
                            <li key={childButtons.order} className="flex">
                              <a
                                href={childButtons.link}
                                className={childButtons.css}
                              >
                                {childButtons.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </div>
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
