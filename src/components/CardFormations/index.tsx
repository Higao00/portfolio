import * as S from "./styles"

interface ICardFormations {
    logo: string
    title: string
}

const CardFormations = ({ logo, title }: ICardFormations) => {
    return (
        <S.Container>
            <S.Header>
                <S.Image src={logo} />
            </S.Header>

            <S.Body>
                <S.Title>{title}</S.Title>
            </S.Body>
        </S.Container>
    )
}

export default CardFormations
