import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Contact from "../components/Contacts"
import Formations from "../components/Formations"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import SocialNetworks from "../components/SocialNetworks"

const MainRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/formations" element={<Formations />} />
                <Route path="/social-networks" element={<SocialNetworks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default MainRoutes
