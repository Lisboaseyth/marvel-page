import styled from "styled-components";

export const ImgModal = styled.img`
    width: 200px;
`

export const DivModal = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        h4{
            margin-left: 5px;
        }
    }

    h2{
        width: 80%;
    }
`

export const CardComic = styled.li`

    width: 200px;
    height: 320px;

    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 20px;

    padding: 15px 5px 10px;

    border-radius: 7px;

    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    transition: 0.3s ease-out;

    img{
        width: 90%;
        height: 80%;

        border-radius: 7px;

    }

    h2{
        background-color: transparent;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;

        text-overflow:    ellipsis;
        text-align: center;
    }:hover{
        box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.2);

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    .btnOpenModal{
        background: red;

        color: #FFFFFF;

        cursor: pointer;

        border: none;

        border-radius: 5px;

        width: 90%;
        padding: 5px;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    .btnOpenModal:hover{

        background-color: #A90000;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;

    }
`