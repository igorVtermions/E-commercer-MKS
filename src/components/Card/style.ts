import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 15px;

  .photo {
    width: 60%;
    margin-top: 5px;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 13.5rem;
    height: 17.8rem;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    .content {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      width: 12rem;
      margin-top: 10%;
      gap: 2px;

      .name {
        font-size: 1rem;
        width: 8.8rem;
        font-weight: 400;
        line-height: 1.1rem;
        color: #2c2c2c;
      }
      .price {
        background-color: #373737;
        color: white;
        border-radius: 0.3rem;
        padding: 0.3rem;
        font-size: 0.9rem;
        line-height: 0.9rem;
        font-weight: 700;
      }
    }
    .description {
      color: #2c2c2c;
      font-weight: 300;
      font-size: 0.6rem;
      line-height: 0.7rem;
      width: 12rem;
    }

    button {
      background-color: #0f52ba;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      line-height: 18px;
      font-weight: 600;
      border: none;
      width: 13.6rem;
      height: 1.9rem;
      color: white;
      cursor: pointer;
    }
  }

  @media (max-width: 1440px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    .card {
      width: 15.6rem;
      height: 20.5rem;

      button {
        width: 15.9rem;
        height: 2.2rem;
      }
    }
  }
`;
