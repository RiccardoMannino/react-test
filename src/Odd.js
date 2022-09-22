import { useState } from "react";

export function Odd({ prop }) {
  const [isVisible, setIsVisible] = useState(false);

  // funzione che cambia lo state rendendola visibile / invisibile la lista
  function nascondi() {
    setIsVisible((prevIsVisibleValue) => !prevIsVisibleValue);
  }

  return (
    <>
      <button onClick={nascondi}>Odd</button>

      <ul>
        {isVisible &&
          prop.odd.map((index, key) => {
            return (
              <li key={index + key}>
                {index}
                <button name={index} onClick={prop.deleted}>
                  Rimuovi
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
