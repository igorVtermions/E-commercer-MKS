import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #0f52ba;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101px;
  padding: 30px;

  .logo {
    display: flex;
    align-items: baseline;
    gap: 5px;
    color: white;

    .logo01 {
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 1.1rem;
    }
    .logo02 {
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.1rem;
    }
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 2rem;
    gap: 10px;
    padding: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    .cart {
      width: 1.1rem;
    }
    .counter {
      font-weight: 700;
      font-size: 1.1rem;
    }
  }

  .modal {
    display: flex;
    justify-content: center;
    position: fixed;
    left: 87.2rem;
    top: 0px;
    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    height: 100%;
    width: 30.3rem;
    animation: modal 0.3s;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60, -60px);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, -60px);
    }
  }

  @media (max-width: 1460px) {
    .modal {
      left: 59.7rem;
    }
  }
  @media (max-width: 1024px) {
    .modal {
      left: 33.7rem;
    }
  }
  @media (max-width: 800px) {
    .modal {
      height: 1200px;
      left:20rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0;
    gap: 5rem;
    height: 3.5rem;
    justify-content: space-around;

    .logo {
      .logo01 {
        font-size: 2rem;
      }
      .logo02 {
        font-size: 1rem;
      }
    }

    .place {
      width: 4.1rem;
      height: 2.1rem;
      gap: 10px;
      padding: 10px;
    }

    .modal {
      width: 22rem;
      height: 650px;
      left: 3.1rem;
    }
  }

  @media (max-width: 375px) {
    .modal {
      width: 19.7rem;
      left: 3.9rem;
    }
  }
`;
