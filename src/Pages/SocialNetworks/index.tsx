import * as S from "./styles"
import CardSocialNetwork from "../../components/CardSocialNetwork"
import Transitions from "../../components/Transitions"
import data from "../../Pages/SocialNetworks/data"

const SocialNetworks = () => {
    return (
        <Transitions>
            <S.Container>
                {data.map((data, index) => (
                    <CardSocialNetwork
                        key={index}
                        link={data.link}
                        logo={data.logo}
                        name={data.name}
                        type={data.type}
                        color={data.color}
                        qrcode={data.qrcode}
                    />
                ))}
            </S.Container>
        </Transitions>
    )
}

export default SocialNetworks
