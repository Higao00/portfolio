import { Alert, Snackbar, Stack } from "@mui/material"
import { useState } from "react"
import FormContact from "../../components/FormContact"
import Transitions from "../../components/Transitions"
import * as S from "./styles"

const Contact = () => {
    const [notification, setNotification] = useState(false)

    const handleClose = () => {
        setNotification(false)
    }

    const handleOpen = () => {
        setNotification(true)
    }

    return (
        <Transitions>
            <S.Container>
                <FormContact openNotification={handleOpen} />
            </S.Container>

            <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar open={notification} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                        Thanks, I'll be in touch soon!👏👏👏
                    </Alert>
                </Snackbar>
            </Stack>
        </Transitions>
    )
}

export default Contact
