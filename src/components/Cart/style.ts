import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  .topItems {
    margin-top: 5%;

    .headerCart {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      width: 100%;
      gap: 8.5rem;

      margin-bottom: 70px;

      .title {
        color: white;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2rem;
        width: 50%;
      }

      .close {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    .contentCard {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 28px;
      justify-content: space-around;
    }
    .card {
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 24.5rem;
      height: 5.9rem;
      box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      padding: 8px;

      .photo {
        width: 3.1rem;
      }

      .name {
        width: 7rem;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1rem;
      }

      .qtd {
        font-weight: 400;
        font-size: 5px;
        line-height: 6px;
        position: relative;
        top: -14px;
        left: 17px;
      }

      .itemsMeterPrice {
        display: flex;
        gap: 40px;

        .meter {
          width: 3.1rem;
          height: 1.1rem;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          border: 0.3px solid #bfbfbf;
          border-radius: 4px;
          padding: 4px;

          .btnMeter {
            background-color: transparent;
            border: none;
            font-size: 15px;
            font-weight: 400;
            line-height: 9.75px;
            cursor: pointer;
          }

          .plus {
            border-left: 0.2px solid #bfbfbf;
            padding: 1px;
          }
          .min {
            border-right: 0.2px solid #bfbfbf;
            padding: 2px;
          }

          .amount {
            font-size: 8px;
            font-weight: 400;
            line-height: 9.75px;
          }
        }

        .price {
          font-size: 14px;
          line-height: 17px;
          font-weight: 700;
        }
      }

      .close {
        background-color: transparent;
        border: none;
        width: 1.5rem;
        cursor: pointer;
        position: relative;
        top: -20px;
        left: 10px;
      }
      .closeMobile {
        display: none;
      }
    }
  }

  .bottomItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;

      .textTotal {
        color: white;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 15px;
      }
    }

    .btnFinisher {
      background-color: black;
      color: white;
      border: none;
      width: 485px;
      height: 97px;
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 15px;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    .topItems {
      .headerCart {
        gap: 0;
        .close {
          width: 46px;
          height: 46px;
        }
      }
      .card {
        flex-direction: column;
        width: 15.6rem;
        height: 13.7rem;

        .photo {
          width: 5.6rem;
        }
        .name {
          width: 100%;
          font-size: 1rem;
          text-align: center;
          line-height: 1.1rem;
          margin-top: 10px;
        }

        .qtd {
          display: none;
        }

        .itemsMeterPrice {
          margin-top: 20px;
          gap: 20px;
          align-items: center;
          .meter {
            width: 6rem;
            height: 2.1rem;
            justify-content: space-around;
            padding: 0;

            .btnMeter {
              font-size: 22px;
              font-weight: 400;
              line-height: 1.6rem;
              cursor: pointer;
            }

            .plus {
              border-left: 0.2px solid #bfbfbf;
              padding-left: 10px;
            }
            .min {
              border-right: 0.2px solid #bfbfbf;
              padding-right: 10px;
            }

            .amount {
              font-size: 20px;
              font-weight: 400;
              line-height: 9.75px;
            }
          }

          .price {
            background-color: #373737;
            padding: 12px;
            border-radius: 5px;
            color: white;
            font-size: 15px;
            line-height: 15px;
          }
        }

        .close {
          display: none;
        }

        .closeMobile {
          display: block;
          background-color: transparent;
          border: none;
          position: relative;
          top: -91px;
          left: 53px;
          width: 21px;
        }
      }
    }

    .bottomItems {
      .btnFinisher {
        font-size: 23px;
        line-height: 15px;
        width: 353px;
        height: 85px;
      }
    }
  }

  @media (max-width: 375px) {
    .topItems {
      .headerCart {
        padding: 10px;
      }
    }

    .bottomItems {
      .btnFinisher {
        width: 313px;
      }
    }
  }
`;
