import { motion } from "framer-motion"

type BoxProps = {
    children: React.ReactNode
}

const Transitions = ({ children }: BoxProps) => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    )
}

export default Transitions
