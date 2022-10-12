import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Circle from "../components/circle";

import jeans from "../img/picto_jeans.png";
var TimeConnecte = new Date();
var newyears = new Date(TimeConnecte.getFullYear(), 0, 1, 0, 0, 0).getTime();
TimeConnecte = new Date().getTime();
var secsSinceNewYears = TimeConnecte - newyears;
function timeRemaining() {
  var NbSecondesConnecte = new Date().getTime() - TimeConnecte;
  var secsSince = secsSinceNewYears + NbSecondesConnecte;
  var meow = String((secsSince * 72.93252156266) / 1000);
  return meow;
}

function timeRemaining2() {
  var NbSecondesConnecte = new Date().getTime() - TimeConnecte;
  var secsSince = secsSinceNewYears + NbSecondesConnecte;
  var meow = String((secsSince * 48.198) / 1000);
  return meow;
}
const ChiffresCles = () => {
  useEffect(() => {
    setInterval(() => {
      setSoldJeans(timeRemaining());
      setUsedCoton(timeRemaining2());
    }, 1000);
  }, []);

  let [soldJeans, setSoldJeans] = useState(0);

  let [usedCoton, setUsedCoton] = useState(0);

  return (
    <div id="key-numbers">
      <Header current="key-numbers" />

      <main>
        <h1>Chiffres Clés</h1>

        <Circle
          size={"500px"}
          hSize={"54px"}
          sSize={"20px"}
          main={`${Math.floor(soldJeans)}`}
          sub={`Nombre de jeans
          vendus dans le monde
          depuis le 01/01/2022`}
          img={jeans}
        ></Circle>
        <Circle
          size={"400px"}
          hSize={"30px"}
          sSize={"14px"}
          main={`${Math.floor(usedCoton)}`}
          sub={`Nombre de jeans
          vendus dans le monde
          depuis le 01/01/2022`}
          img={jeans}
        ></Circle>
      </main>
    </div>
  );
};

export default ChiffresCles;
