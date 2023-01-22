import styled from "styled-components";

export const HeaderPageStyled = styled.header`

    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    width: 100%;
    height: 70px;

    top: 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: fixed;

    padding: 0 30px;

    background-color: #FFFFFF;

    .aLogo{
        background-color: transparent;

        
        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    .aLogo:hover{
        
        transform: scale(1.2, 1.2);

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    img{
        width: 50px;

        background-color: transparent;
    }

`