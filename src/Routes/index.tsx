import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Contact from "../Pages/Contacts"
import Formations from "../Pages/Formations"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"
import Skills from "../Pages/Skills"
import SocialNetworks from "../Pages/SocialNetworks"

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
