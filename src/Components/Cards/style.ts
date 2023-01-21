import styled from "styled-components";

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
    }


`