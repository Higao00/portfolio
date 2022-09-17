import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import MainRoutes from "./Routes"

const App = () => {
    return (
        <Router>
            <Header />
            <MainRoutes />
        </Router>
    )
}

export default App
