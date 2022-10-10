import React, { useState } from "react"
import * as S from "./styles"
import * as Icons from "@mui/icons-material"
import themeColors from "../../theme/themeColors"

import { motion } from "framer-motion"
import data from "./data"

const Header = () => {
    const [activeButtonMenuMobile, setActiveButtonMenuMobile] = useState(false)

    return (
        <>
            <S.Container>
                <S.ContainerLogo>
                    <S.LogoPhoto src="https://avatars.githubusercontent.com/u/54690671?v=4" />
                    <S.Logo>Higor Henrique</S.Logo>

                    <S.ContainerButtonMenuMobile activeButtonMobile={activeButtonMenuMobile} onClick={() => setActiveButtonMenuMobile(!activeButtonMenuMobile)}>
                        <b />
                        <b />
                        <b />
                    </S.ContainerButtonMenuMobile>
                </S.ContainerLogo>

                <S.MenuDesktop>
                    <ul>
                        {data.map((data, index) => (
                            <li key={index}>
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </S.MenuDesktop>
            </S.Container>

            {activeButtonMenuMobile && (
                <S.MenuMobile>
                    <motion.ul initial={{ height: "100%" }} animate={{ height: "85%" }} exit={{ y: window.innerHeight }} transition={{ duration: 0.8 }}>
                        {data.map((data, index) => (
                            <li key={index}>
                                <data.icon fontSize="large" style={{ color: themeColors.colors.shape }} />
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </motion.ul>
                </S.MenuMobile>
            )}
        </>
    )
}

export default Header
