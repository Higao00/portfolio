import styled from "styled-components"

export const Container = styled.div`
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
    flex: 1;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;

    max-height: 200px;
`

export const Body = styled.div`
    height: 65px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h3`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: #ffffff;
`
