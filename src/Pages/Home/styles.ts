import styled from "styled-components"

export const VideoDesktop = styled.video`
    display: none;
    @media (min-width: 1280px) {
        width: 100%;
        height: 100vh;

        object-fit: cover;

        position: absolute;
        display: block;
    }
`
export const VideoMobile = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;

    position: absolute;

    @media (min-width: 1280px) {
        display: none;
    }
`

export const Container = styled.section`
    height: calc(100vh - 110px);
    width: 90%;

    position: relative;

    padding: 0 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5%;

    @media (min-width: 1280px) {
        flex-direction: row;
        column-gap: 1%;
    }

    @media (min-width: 800px) and (max-width: 1280px) {
        flex-direction: row;
        column-gap: 1%;
    }
`

export const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    max-height: calc((100vh - 110px) / 2);

    @media (min-width: 1280px) {
        width: 100%;
        height: calc((100vh - 110px) / 2);
    }
`
