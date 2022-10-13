import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import { Experience } from "../styles/HomeStyle";
import Experience_data from "../Experience_data.json";
import Step from "../components/Step/Step";
import { StyledFooter } from "../styles/Style";

const Home = () => {
  const [travel, setTravel] = useState("0");

  const pins = [
    "inde",
    "pakistan",
    "chine",
    "tunisie",
    "japon",
    "australie",
    "congo",
    "turquie",
    "france",
    "usa",
  ];

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const tl = new gsap.timeline();

    tl.to(element.querySelector(".pins #pakistan"), {
      opacity: 1,
      scrollTrigger: {
        trigger: element.querySelector(".step-1"),
        start: "bottom center",
        end: "bottom bottom",
      },
      onComplete: () => {
        setTravel("2 207");
      },
    })
      .to(element.querySelector(".pins #chine"), {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".step-2"),
          start: "bottom center",
          end: "bottom bottom",
        },
        onComplete: () => {
          setTravel("6 081");
        },
      })
      .to(
        element.querySelector(".pins #tunisie"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-3"),
            start: "bottom center",
            end: "bottom bottom",
          },
        },
        "same"
      )
      .to(
        element.querySelector(".pins #japon"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-3"),
            start: "bottom center",
            end: "bottom bottom",
          },
        },
        "same"
      )
      .to(
        element.querySelector(".pins #australie"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-3"),
            start: "bottom center",
            end: "bottom bottom",
          },
        },
        "same"
      )
      .to(
        element.querySelector(".pins #congo"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-3"),
            start: "bottom center",
            end: "bottom bottom",
          },
          onComplete: () => {
            setTravel("48 679");
          },
        },
        "same"
      )
      .to(element.querySelector(".pins #turquie"), {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".step-4"),
          start: "bottom center",
          end: "bottom bottom",
        },
        onComplete: () => {
          setTravel("52 486");
        },
      })
      .to(
        element.querySelector(".pins #france"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-5"),
            start: "bottom center",
            end: "bottom bottom",
          },
        },
        "last"
      )
      .to(
        element.querySelector(".pins #usa"),
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element.querySelector(".step-5"),
            start: "bottom center",
            end: "bottom bottom",
          },
          onComplete: () => {
            setTravel("65 463");
          },
        },
        "last"
      );
  }, []);

  return (
    <div id="home">
      <Header current="home" />

      <main>
        <Experience ref={ref}>
          <section className="steps">
            {Experience_data.map((step) => {
              return <Step key={step.id} step={step} />;
            })}
          </section>
          <section className="map">
            <h2>Vinted retrace le trajet de ton jean lors de sa fabrication</h2>
            <h1>{travel} Km</h1>
            <div className="map-container">
              <img src="/img/home/map.svg" alt="World map" />
              <div className="pins">
                {pins.map((pin, index) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.082"
                      height="31.949"
                      viewBox="0 0 20.082 31.949"
                      id={pin}
                      key={index}
                    >
                      <path
                        d="M68.626,36.4c-.758-3.629-3.692-7.162-7.39-8.037-3.678-.87-7.676,1.552-9.675,4.55-2.1,3.151-2.793,8.393-.229,11.479a8.312,8.312,0,0,0,4.876,2.726.446.446,0,0,0-.12.272q.072,3.263-.061,6.522a2.929,2.929,0,0,0,.507,2.159A11.53,11.53,0,0,1,57.875,59c.15.492,2.067-.823,2.212-1.07.518-.883,1.052-1.758,1.555-2.65a5.4,5.4,0,0,0,.543-2.626q.155-3.039.31-6.079c.076-.029.153-.058.228-.089a9.285,9.285,0,0,0,5.9-10.093ZM56.381,32.579a8.59,8.59,0,0,0,.4,8.469c.264.425-2,1.767-2.278,1.315a8.975,8.975,0,0,1-.272-8.959,2.994,2.994,0,0,1,1.495-1.01c.238-.085.9-.292.651.185ZM59.917,53.3a6.9,6.9,0,0,1-.393,2.747,10.07,10.07,0,0,0-.5-.948,5.7,5.7,0,0,1-.7-1.12,5.286,5.286,0,0,1,.011-1.615c.065-1.68.08-3.359.059-5.039a11.909,11.909,0,0,0,1.835-.143L59.917,53.3Z"
                        transform="translate(-49.178 -27.672)"
                        stroke="#19363b"
                        strokeWidth="1"
                      />
                    </svg>
                  );
                })}
              </div>
            </div>
          </section>
        </Experience>
      </main>

      <StyledFooter>
        Helooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      </StyledFooter>
    </div>
  );
};

export default Home;
