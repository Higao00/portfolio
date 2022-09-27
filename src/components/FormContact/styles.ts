import styled from "styled-components"
import { Button, TextField } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"

export const Container = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 110px;

    @media (min-width: 1280px) {
        flex-direction: row;
        margin-bottom: 0;
    }
`

export const ContainerQrCode = styled.div`
    width: 80%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    border-radius: 10px 10px 0 0;
    background: ${({ theme }) => theme.colors.body_transparent};

    @media (min-width: 1280px) {
        width: 25vw;
        height: 48vh;

        border-radius: 10px 0 0 10px;
    }
`
export const QrCode = styled.img`
    width: 60%;
    height: auto;

    border-radius: 15px;

    object-fit: cover;
`

export const Title = styled.h3`
    padding: 1rem;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const Form = styled.form`
    width: 85%;
    height: auto;

    min-height: 300px;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    border-radius: 10px;

    background: ${({ theme }) => theme.colors.shape_transparent};

    @media (min-width: 1280px) {
        width: 35vw;
        height: 50vh;
        justify-content: space-evenly;
    }
`

export const ContainerInput = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const TitleError = styled.span`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: red;

    padding: 0.5rem;
`
export const Input = styled(TextField)`
    width: 100%;
`
export const ButtonSubmit = styled(LoadingButton)`
    width: 90%;

    @media (min-width: 1280px) {
        width: 50%;
    }
`
