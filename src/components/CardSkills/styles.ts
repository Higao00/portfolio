import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 300px;

    border-radius: 5px;

    background-color: #181616ed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.6s;

    @media (min-width: 1280px) {
        min-width: 250px;
    }

    :hover {
        transform: scale(0.96);
    }
`

export const Header = styled.div`
    width: 90%;
    height: 90px;

    padding: 5%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 80px;
`

export const Body = styled.div`
    width: 90%;
    height: 160px;

    padding: 0 5% 5% 5%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    h2 {
        font-family: ${({ theme }) => theme.fonts.bold};
        color: #ffffff;
        padding: 0;
        margin: 0;
    }

    p {
        font-family: ${({ theme }) => theme.fonts.light};
        color: #ffffff;
        text-align: center;
    }
`
