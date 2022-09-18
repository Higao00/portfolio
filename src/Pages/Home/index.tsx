import Transitions from "../../components/Transitions"
import * as S from "./styles"

const Home = () => {
    return (
        <Transitions>
            <S.VideoDesktop autoPlay loop muted>
                <source src="https://drive.google.com/uc?export=download&id=1tbjotXUsiQSB8J8lwLpOUyRQpPcfvO4X" type="video/mp4" />
            </S.VideoDesktop>

            <S.VideoMobile autoPlay loop muted>
                <source src="https://drive.google.com/uc?export=download&id=1w1cWrmryp64UJP30NbB6uG3dkSvp2rVv" type="video/mp4" />
            </S.VideoMobile>

            <S.Container>
                <S.Image src="https://github-readme-stats.vercel.app/api?username=higao00&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
                <S.Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=higao00&layout=compact&langs_count=7&theme=dark" />
            </S.Container>
        </Transitions>
    )
}

export default Home
