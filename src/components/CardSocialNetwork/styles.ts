import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 240px;

    border-radius: 5px;

    background: linear-gradient(140deg, #181616ed 50%, ${(p) => p.color});

    opacity: 0.7;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.6s;

    @media (min-width: 1280px) {
        min-width: 200px;
    }

    :hover {
        transform: scale(0.96);
    }
`

export const ContainerBody = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    :hover {
        #title {
            transform: rotate(-3deg);
        }
    }
`

export const QrCode = styled.img`
    width: auto;
    height: 100%;

    object-fit: cover;
`

export const ContainerInfo = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const LogoSocial = styled.img`
    width: auto;
    height: 80px;

    object-fit: cover;
`

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: #ffffff;
    padding: 0.5rem;
    margin: 0;

    transition: 0.6s;
`
