import * as S from "./styles"

interface ICardSkills {
    logo: string
    title: string
    description: string
}

const CardSkills = ({ logo, description, title }: ICardSkills) => {
    return (
        <S.Container>
            <S.Header>
                <S.Image src={logo} />
            </S.Header>

            <S.Body>
                <h2>{title}</h2>
                <p>{description}</p>
            </S.Body>
        </S.Container>
    )
}

export default CardSkills
