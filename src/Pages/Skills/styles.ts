import styled from "styled-components"

export const Container = styled.section`
    width: 90%;
    min-height: calc(100vh - (110px + 2rem));
    overflow: auto;

    padding: 1rem 5%;
    margin-bottom: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;

    @media (min-width: 1280px) {
        height: calc(100vh - (110px + 2rem));
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 10px;
    }
`
