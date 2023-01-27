import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 2rem;
  width: 100%;
  color: white;

  .logo {
    display: flex;
    align-items: baseline;
    gap: 5px;

    .logo01 {
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
    }
    .logo02 {
      font-family: 300;
      font-size: 20px;
      line-height: 19px;
    }
  }

  .place {
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    padding: 20px;
    height: 20px;
    gap: 8px;
    border-radius: 8px;

    .cart {
      height: 17px;
      cursor: pointer;
    }

    .counter {
      font-weight: 700;
      cursor: pointer;
    }
  }

  .overlay {
    background-color: transparent;
  }

  .modal {
    top: 0;
    height: 100%;
    width: 30.3rem;
    background-color: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    position: fixed;
    left: 74.2%;
    z-index: 1000;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 1440px) {
    .modal {
      left: 66.3%;
    }
  }

  @media (max-width: 1030px) {
    .modal {
      left: 52.7%;
    }
  }
  @media (max-width: 800px) {
    .modal {
      left: 40%;
      width: 29rem;
    }
  }
  @media (max-width: 425px) {
    .logo {
      .logo01 {
        font-size: 32px;
      }
      .logo02 {
        font-size: 16px;
      }
    }
    .modal {
      left: 19%;
      width: 22rem;
    }
  }
  @media (max-width: 375px) {
    height: 48px;
    .modal {
      left: 19%;
      width: 19rem;
    }
    .place {
        width: 52px;
        height: 26px;
        padding: 10px;

        .cart {
      height: 11px;
      
    }

    .counter {
      font-size: 12px;
      cursor: pointer;
    }
    }
  }
`;
