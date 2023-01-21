import styled from "styled-components";

export const HeaderPageStyled = styled.header`

    width: 100%;
    height: 80px;

    margin-top: -70px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: fixed;

    padding: 0 30px;

    background-color: #FFFFFF;


    .divAlign{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;

        background-color: #E9E9E9;
        border-radius: 10px;

        input{
            width: 200px;
            height: 30px;

            background-color: #F2F2F2;

            border: none;
            border-radius: 5px;

            padding: 5px 15px;

            margin-right: 5px;

            font-size: 20px;
        }

        .icon{
            background-color: transparent;
        }

    }

    img{
        width: 50px;

        background-color: transparent;
    }

`