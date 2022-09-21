import FormContact from "../../components/FormContact"
import Transitions from "../../components/Transitions"
import * as S from "./styles"

const Contact = () => {
    return (
        <Transitions>
            <S.Container>
                <FormContact />
            </S.Container>
        </Transitions>
    )
}

export default Contact
