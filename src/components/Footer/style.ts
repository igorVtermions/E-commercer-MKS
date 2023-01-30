import styled from "styled-components";

export const Foot = styled.footer`
  background-color: #eeeeee;
  width: 100%;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    margin-top: 4.5%;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
`;
