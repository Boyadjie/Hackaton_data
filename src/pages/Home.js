import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import { Experience } from "../styles/Style";
import Experience_data from "../Experience_data.json";

const Home = () => {
  const [travel, setTravel] = useState(0);
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const tl = new gsap.timeline();

    tl.to(element.querySelector(".map h1"), {
      scrollTrigger: {
        trigger: element.querySelector(".step-1"),
        start: "bottom center",
        end: "bottom bottom",
        markers: true,
      },
      onComplete: () => {
        setTravel(2207);
      },
    }).to(element.querySelector(".map h1"), {
      scrollTrigger: {
        trigger: element.querySelector(".step-2"),
        start: "bottom center",
        end: "bottom bottom",
        markers: true,
      },
      onComplete: () => {
        setTravel(6081);
      },
    });
  }, []);

  return (
    <div id="home">
      <Header current="home" />

      <main>
        <Experience ref={ref}>
          <section className="steps">
            {Experience_data.map((step) => {
              return (
                <div className={`step step-${step.id}`} key={step.id}>
                  <p className="index">Étape {step.id}</p>
                  <p className="title">{step.title}</p>
                </div>
              );
            })}
          </section>
          <section className="map">
            <h2>Vinted retrace le trajet de ton jean lors de sa fabrication</h2>
            <h1>{travel} Km</h1>
          </section>
        </Experience>
      </main>
    </div>
  );
};

export default Home;
