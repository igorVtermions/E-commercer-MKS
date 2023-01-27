import styled from "styled-components";

export const Container = styled.section`


  .headerCart {
    display: flex;
    gap: 200px;
    align-items: center;

    .title {
      width: 180px;
      height: 56px;
      font-weight: 700;
      font-size: 27px;
      line-height: 32.91px;
    }
    .close {
      background-color: transparent;
      border: none;
    }
  }

  .card{
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25rem;
    height: 5.9rem;
    gap: 3px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    .photo{
      width: 5rem;
    }
  }

  @media (max-width: 425px) {
    .headerCart {  
    gap: 70px;

    .title {
      width: 178px;
      height: 37px;
    }
  }
}
`;
