import Transitions from "../Transitions"
import * as S from "./styles"

const Home = () => {
    return (
        <Transitions>
            <S.Container>
                <a href="https://github.com/higao00">
                    <img
                        height="180em"
                        src="https://github-readme-stats.vercel.app/api?username=higao00&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
                    />
                    <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=higao00&layout=compact&langs_count=7&theme=dark" />
                </a>
            </S.Container>
        </Transitions>
    )
}

export default Home
