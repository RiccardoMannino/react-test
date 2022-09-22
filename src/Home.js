import { useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home() {
  const [dato, setDato] = useState("");
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  async function math() {
    const dati = await fetch(`http://numbersapi.com/random/math`);
    const response = await dati.text();
    setDato(response);
    const numero = dato.split(" ")[0];
    if (numero % 2 == 0) {
      setEven((prev) => [...prev, dato]);
      console.log(even);
    } else {
      setOdd((prev) => [...prev, dato]);
      console.log(odd);
    }
  }

  // funzione che elimina ogni singola voce dalle rispettive liste
  function deleted(e) {
    if (e.target.name.split(" ")[0] % 2 === 0) {
      setEven((prev) => prev.filter((elemento) => elemento !== e.target.name));
    } else {
      setOdd((prev) => prev.filter((elemento) => elemento !== e.target.name));
    }
  }

  return (
    <>
      <button onClick={math}>fetch</button>
      {dato && <p>{dato}</p>}

      <Even prop={{ even, deleted }} />

      <Odd prop={{ odd, deleted }} />
    </>
  );
}
