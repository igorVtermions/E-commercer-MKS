import styled from "styled-components";

export const Navbar = styled.header`
    background-color: #0F52BA;
    display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
	padding: 0 2rem;
    width: 100%;
    color: white;

    .logo{
    
        display: flex;
        align-items: baseline;
        gap: 5px;


        .logo01{
            font-weight: 600;
            font-size: 40px;
            line-height: 19px;
        }
        .logo02{
          font-family: 300;
          font-size: 20px;
          line-height: 19px;
        }
    }

    .place{
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

        .cart{
            height: 17px;
            cursor: pointer;
        }

        .counter{
            font-weight: 700;
            cursor: pointer;
        }
    }
`