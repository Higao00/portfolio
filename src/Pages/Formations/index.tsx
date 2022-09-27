import CardFormations from "../../components/CardFormations"
import Transitions from "../../components/Transitions"
import data from "./data"
import * as S from "./styles"

const Formations = () => {
    return (
        <Transitions>
            <S.Container>
                {data.map((data, index) => (
                    <CardFormations key={index} logo={data.logo} title={data.title} />
                ))}
            </S.Container>
        </Transitions>
    )
}

export default Formations
