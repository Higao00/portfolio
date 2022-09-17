import React from "react"
import styled from "styled-components"

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    activeButtonMobile: boolean
}

export const Container = styled.main`
    height: 110px;
    width: 100vw;

    bottom: 0;

    position: fixed;

    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 1280px) {
        justify-content: space-around;
    }
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    @media (min-width: 1280px) {
        width: auto;
        justify-content: flex-start;
    }
`
export const Logo = styled.h2`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};

    @media (min-width: 1280px) {
        margin-left: 1rem;
    }
`
export const LogoPhoto = styled.img`
    width: 80px;
    border-radius: 100px;
`

export const MenuDesktop = styled.nav`
    display: none;

    @media (min-width: 1280px) {
        display: block;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        li {
            padding-right: 2rem;
            list-style-type: none;

            a {
                font-family: ${({ theme }) => theme.fonts.medium};
                color: ${({ theme }) => theme.colors.shape};
                text-decoration: none;
                font-size: 1rem;

                :hover {
                    color: ${({ theme }) => theme.colors.title};
                }
            }
        }
    }
`

export const MenuMobile = styled.nav`
    position: absolute;
    z-index: 2;

    height: calc(100vh - 110px);
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        flex-direction: column;

        margin: 0;
        padding: 0;

        li {
            list-style-type: none;
            border-bottom: solid 0.5px ${({ theme }) => theme.colors.shape_transparent};

            margin: 1.5rem auto;
            width: 100%;

            display: flex;
            justify-content: flex-start;

            a {
                font-family: ${({ theme }) => theme.fonts.medium};
                color: ${({ theme }) => theme.colors.shape};
                text-decoration: none;
                font-size: 2rem;
                margin-left: 1rem;

                :hover {
                    color: ${({ theme }) => theme.colors.title};
                }
            }
        }
    }

    @media (min-width: 1280px) {
        display: none;
    }
`

export const ContainerButtonMenuMobile = styled.button<PropsButton>`
    z-index: 3;

    background-color: transparent;

    height: 55px;
    width: 55px;

    border-radius: 100px;
    border: solid 2px ${({ theme }) => theme.colors.backgroud};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    b {
        width: 20px;
        height: 1px;

        margin-bottom: 0.4rem;
        border-bottom: solid 3px ${({ theme }) => theme.colors.backgroud};

        transform: ${(p) => (p.activeButtonMobile ? "rotate(30deg)" : "rotate(0)")};
        transition: 1s;
    }

    @media (min-width: 1280px) {
        display: none;
    }
`
