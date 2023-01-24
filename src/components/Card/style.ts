import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid: repeat(2, 330px) / auto-flow 240px;
  color: black;

  .photo {
    width: 65%;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 13.598rem;
    height: 17.813rem;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    .content {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      width: 11.75rem;

      .name {
        font-size: 16px;
        width: 7.75rem;
        font-weight: 400;
        line-height: 19px;
        color: #2c2c2c;
      }
      .price {
        background-color: #373737;
        color: white;
        border-radius: 5px;
        padding: 5px;
        font-size: 15px;
        line-height: 15px;
        font-weight: 700;
      }
    }
    .description {
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      margin-top: 8px;
      margin-bottom: 12px;
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
      height: 1.994rem;
      color: white;
      cursor: pointer;
    }
  }
`;
