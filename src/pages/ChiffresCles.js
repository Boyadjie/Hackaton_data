import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Circle from "../components/circle";

import jeans from "../img/jeans.png";
import jean from "../img/picto_jeans.png";

import elephant from "../img/elephant.png";
import world from "../img/world.png";
import leftArrow from "../img/l-arrow.png";
import centerArrow from "../img/c-arrow.png";
import rightArrow from "../img/r-arrow.png";
import co2 from "../img/co2.png";
import plane from "../img/plane.png";
import water from "../img/eau.png";
import coton from "../img/coton.png";
import progbar from "../img/progbar.png";
import trash from "../img/trash.png";

import {
  Arrow,
  Bar,
  Bigcirclecontainer,
  StyledChiffresclé,
} from "../styles/chiffresClesStyles";
import Footer from "../components/Footer";

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
    <>
      <Header current="key-numbers" />

      <StyledChiffresclé>
        <h1>Chiffres Clés</h1>

        <Bar color="#C0D0C8">
          <Circle
            size={"400px"}
            hSize={"70px"}
            sSize={"18px"}
            // main={`${Math.floor(usedCoton)}`}

            main={"="}
            sub={`11 000 L d'eau 
            au total / jean`}
            img={elephant}
            gap="00rem"
            imgSub={`1 éléphant de savane d'Afrique (11 T)`}
          ></Circle>
          <Circle
            size={"400px"}
            hSize={"70px"}
            sSize={"18px"}
            main={`=`}
            sub={`65 000 KM EN 
            MOYENNE / jean`}
            img={world}
            gap={"0.5rem"}
            imgSub={"1,5 fois le tour de la terre"}
          ></Circle>
          <Circle
            size={"400px"}
            hSize={"70px"}
            sSize={"18px"}
            main={`=`}
            sub={`2,3 milliards de
            jeans vendus / an`}
            img={jeans}
            gap={"0.5rem"}
            imgSub={"73 jeans / seconde"}
          ></Circle>
        </Bar>

        <Bigcirclecontainer margin={"20rem"}>
          <Circle
            size={"400px"}
            hSize={"50px"}
            sSize={"18px"}
            main={`${Math.floor(soldJeans)
              .toLocaleString("en")
              .replaceAll(",", " ")}`}
            sub={`Nombre de jeans
            vendus dans le monde
            depuis le 01/01/2022`}
            img={jean}
            gap={"0.5rem"}
          ></Circle>
        </Bigcirclecontainer>

        <Bigcirclecontainer margin={"5rem"} gap={"5rem"}>
          <Circle
            size={"380px"}
            hSize={"40px"}
            sSize={"18px"}
            main={`${Math.floor(soldJeans * 33, 4)
              .toLocaleString("en")
              .replaceAll(",", " ")}`}
            sub={`kg equivalent CO2 émis
            au total`}
            img={co2}
            gap={"1rem"}
          ></Circle>

          <Circle
            size={"380px"}
            hSize={"30px"}
            sSize={"18px"}
            main={`${Math.floor(soldJeans * 65000)
              .toLocaleString("en")
              .replaceAll(",", " ")} km`}
            sub={`kilomètre au total
            parcourus`}
            img={plane}
            gap={"3rem"}
            top={"10rem"}
          ></Circle>
          <Circle
            size={"380px"}
            hSize={"30px"}
            sSize={"18px"}
            main={`${Math.floor(soldJeans * 10000)
              .toLocaleString("en")
              .replaceAll(",", " ")} L`}
            sub={`Eau utilisée pour 
            la production du 
            jean`}
            img={water}
            gap={"2rem"}
          ></Circle>

          <Arrow src={leftArrow} left={"35%"}></Arrow>
          <Arrow src={centerArrow} left={"49%"}></Arrow>
          <Arrow src={rightArrow} left={"60%"}></Arrow>
        </Bigcirclecontainer>

        <Bar color="#86B8BA" margin={"20rem"}>
          <Circle
            size={"400px"}
            hSize={"30px"}
            sSize={"15px"}
            // main={`${Math.floor(usedCoton)}`}

            main={`${Math.floor(usedCoton)
              .toLocaleString("en")
              .replaceAll(",", " ")} kg`}
            sub={`Kg utilisé pour la 
          fabrication annuel de jean`}
            img={coton}
            gap="2rem"
          ></Circle>
          <Circle
            size={"400px"}
            hSize={"50px"}
            sSize={"15px"}
            main={`87%`}
            sub={`matière première
          brulée jetée
         car non recyclée`}
            img={progbar}
            gap={"2rem"}
            imgSub={"de la production du textile"}
          ></Circle>
          <Circle
            size={"400px"}
            hSize={"30px"}
            sSize={"18px"}
            main={`${Math.floor((usedCoton * 0.87) / 365)
              .toLocaleString("en")
              .replaceAll(",", " ")} kg`}
            sub={`soit`}
            img={trash}
            gap={"1.5rem"}
            imgSub={"Kg / jour"}
          ></Circle>
        </Bar>
      </StyledChiffresclé>

      <Footer />
    </>
  );
};

export default ChiffresCles;
