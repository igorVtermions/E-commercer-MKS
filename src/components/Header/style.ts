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
    width:  39vw;
    max-width: 500px;
    min-width: 320px;
    height: 100vh;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #0f52ba;
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: auto;
    animation: modal .4s;
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

  @media(max-width: 800px){
    .modal{
      width: 60vw;
    }
  }
  @media(max-width: 500px){
    .modal{
      width: 80vw;
    }
  }

`;
