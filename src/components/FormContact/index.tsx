import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import * as S from "./styles"

const FormContact = () => {
    const [age, setAge] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string)
    }

    return (
        <S.Container>
            <S.ContainerQrCode>
                <S.QrCode src="https://drive.google.com/uc?id=10DdkeUffPF2JJdV_5DRRzo38ZwlbbEqR" />

                <S.Title>My personal data to contact.</S.Title>
            </S.ContainerQrCode>

            <S.Form>
                <S.Input type={"text"} label="Name" variant="outlined" size="small" required />
                <S.Input type={"email"} label="Email" variant="outlined" size="small" required />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        label="Subject"
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value={10}>Development</MenuItem>
                        <MenuItem value={20}>Personal contact</MenuItem>
                        <MenuItem value={30}>Help with programming </MenuItem>
                        <MenuItem value={40}>Job vacancy</MenuItem>
                        <MenuItem value={50}>General doubts</MenuItem>
                    </Select>
                </FormControl>
                <S.ButtonSubmit variant="outlined">Submit</S.ButtonSubmit>
            </S.Form>
        </S.Container>
    )
}

export default FormContact
