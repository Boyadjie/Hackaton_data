import styled from "styled-components";

export const Experience = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  height: 100%;

  .map {
    position: fixed;
    width: calc(60% - 30px);
    right: 30px;
    top: 100px;
    background-color: #f8f8f8;
    text-align: center;
    padding-top: 60px;

    h1 {
      transition: all 0.3s;
      font-size: 64px;
      padding: 0;
      margin: 0;
    }

    h2 {
      font-size: 32px;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }

    .map-container {
      width: 100%;
      position: relative;

      img {
        display: block;
        width: 100%;
      }

      .pins {
        svg {
          position: absolute;
          z-index: 100;
          fill: var(--skin);
          transition: all 0.3s ease-in;
          opacity: 0;

          &#japon,
          &#australie,
          &#congo {
            fill: var(--lightGreen);
            transition-delay: 0.5s;
          }

          &#inde {
            top: 265px;
            left: 700px;
            opacity: 1;
          }
          &#pakistan {
            top: 230px;
            left: 670px;
          }
          &#chine {
            top: 230px;
            left: 780px;
          }
          &#tunisie {
            top: 230px;
            left: 505px;
          }
          &#japon {
            top: 212px;
            right: 171px;
          }
          &#australie {
            top: 400px;
            right: 150px;
          }
          &#congo {
            top: 330px;
            left: 560px;
          }
          &#turquie {
            top: 205px;
            left: 570px;
          }
          &#france {
            top: 180px;
            left: 495px;
          }
          &#usa {
            top: 190px;
            left: 230px;
          }
        }
      }
    }
  }

  .steps {
    width: 35%;
    margin-top: 150px;

    .step {
      width: 100%;
      height: 550px;
      margin-top: 120px;
      border-radius: 20px;
      padding: 50px;
      position: relative;
      transform: scale(0.9);

      &:not(:last-child) {
        margin-bottom: 50px;
      }

      &:nth-child(even) {
        background: var(--mediumBlue);
      }

      &:nth-child(odd) {
        background: var(--lightGreen);
      }

      p,
      li {
        font-weight: 400;
        font-size: 14px;
      }

      strong,
      b {
        font-weight: 500;
        font-size: 16px;
      }

      .illustration {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 45%;
      }

      .step-index {
        font-weight: 500;
      }

      .step-title,
      .step-index {
        text-transform: uppercase;
        font-size: 18px;
      }

      .background {
        position: absolute;
        top: 35px;
        right: 30px;
        width: 20%;
      }

      &.step-4 {
        .background {
          width: 15%;
        }
      }

      .countries {
        display: flex;
        justify-content: space-around;
        flex-direction: row-reverse;
        padding-bottom: 20px;
      }

      .step-content {
        .double-arrow {
          display: flex;
          justify-content: space-around;
          margin-top: 70px;

          > div {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 15px 30px;
            border-radius: 15px;
            height: max-content;
            box-shadow: 0px 3px 6px var(--shadow);
            position: relative;

            p {
              width: 50%;
              font-size: 20px;
              margin-right: 10px;
              width: 70%;
            }

            img {
              display: block;
            }

            &:nth-child(2) {
              transform: translateY(80%);
            }

            &:nth-child(1)::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: -30%;
              right: -100%;
              background: url(/img/home/steps/content/arrow.svg);
              background-size: 100% 100%;
            }
          }
        }

        .double-double-arrow {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;

          > div {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 15px 30px;
            border-radius: 15px;
            height: max-content;
            box-shadow: 0px 3px 6px var(--shadow);
            position: relative;

            p {
              width: 50%;
              font-size: 20px;
              margin-right: 10px;
              width: 100%;
            }

            img {
              display: block;
            }

            &:not(#double-content) {
              &::after {
                content: "";
                position: absolute;
                width: 40%;
                height: 100%;
                top: -30%;
                right: -45%;
                background: url(/img/home/steps/content/arrow.svg);
                background-size: 100% 100%;
              }
            }

            &#double-content {
              div:nth-child(1) {
                width: 100%;
                text-align: center;
              }
              div:nth-child(2) {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
              }
            }
          }
        }

        .tripple {
          display: flex;
          justify-content: space-evenly;
          gap: 20px;
          padding-top: 60px;

          > div {
            position: relative;
            background-color: white;
            width: calc(100% / 3);
            height: 150px;
            border-radius: 15px;

            img,
            p {
              position: absolute;
            }

            img:first-child {
              top: 0;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 70%;
            }

            p {
              top: 20%;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
              text-align: center;
            }

            img:nth-child(3) {
              bottom: -15%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 40%;
            }

            .arrow-country {
              position: absolute;
              width: 60%;
            }

            &:nth-child(1) {
              .arrow-country {
                bottom: -20%;
                left: -20%;
              }
            }
            &:nth-child(2) {
              .arrow-country {
                bottom: -20%;
                left: 40%;
              }
            }
            &:nth-child(3) {
              .arrow-country {
                bottom: -20%;
                right: -20%;
              }
            }
          }
        }

        .double {
          display: flex;
          justify-content: space-between;
          margin-top: 70px;

          > div {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 15px 30px;
            border-radius: 15px;
            height: max-content;
            box-shadow: 0px 3px 6px var(--shadow);
            position: relative;

            p {
              margin-left: 20px;
            }

            &:first-child {
              p {
                margin-left: 5px;
              }
            }
          }
        }

        .simple {
          > div {
            display: flex;
            background-color: white;
            flex-direction: column;
            padding: 15px 30px;
            border-radius: 15px;
            height: max-content;
            box-shadow: 0px 3px 6px var(--shadow);
            position: relative;

            img {
              position: absolute;
              bottom: 20px;
              right: 20px;
            }
          }
        }
      }
    }
  }
`;
