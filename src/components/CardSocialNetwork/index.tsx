import * as S from "./styles"

interface ICardSocialNetwork {
    name: string
    link: string
    logo: string
    type: string
    color: string
    qrcode: string
}

const CardSocialNetwork = ({ name, link, logo, type, color, qrcode }: ICardSocialNetwork) => {
    return (
        <S.Container color={color}>
            <S.ContainerBody>
                <S.QrCode src={qrcode} alt={`Qrcode do ${name}`} />

                <S.ContainerInfo>
                    <a href={type === "email" ? `mailto:${link}` : link} target={"_blank"}>
                        <S.LogoSocial src={logo} alt={`Logo do ${name}`} />
                    </a>
                    <S.Title id="title">{name}</S.Title>
                </S.ContainerInfo>
            </S.ContainerBody>
        </S.Container>
    )
}

export default CardSocialNetwork
