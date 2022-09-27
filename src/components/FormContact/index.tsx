import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { SendEmail } from "../../services"
import * as S from "./styles"

export interface IDataForm {
    name: string
    email: string
    subject: string
}

interface IFormContact {
    openNotification: () => void
}

const FormContact = (props: IFormContact) => {
    const [loadingButtonSubmit, setLoadingButtonSubmit] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<any> = (data: IDataForm) => {
        SendEmail(data)
        setLoadingButtonSubmit(true)

        setTimeout(() => {
            reset()

            // Clear the select field, as reset() does not clear
            document.getElementById("demo-simple-select-autowidth")!.innerHTML = ""
            setLoadingButtonSubmit(false)
            props.openNotification()
        }, 2500)
    }

    return (
        <S.Container>
            <S.ContainerQrCode>
                <S.QrCode src="https://drive.google.com/uc?id=10DdkeUffPF2JJdV_5DRRzo38ZwlbbEqR" />

                <S.Title>My personal data to contact.</S.Title>
            </S.ContainerQrCode>

            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContainerInput>
                    <S.Input type={"text"} label="Name" variant="outlined" size="small" {...register("name", { required: true })} />
                    {errors.name && <S.TitleError>This field is required!</S.TitleError>}
                </S.ContainerInput>

                <S.ContainerInput>
                    <S.Input type={"email"} label="Email" variant="outlined" size="small" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && errors.email.type == "required" && <S.TitleError>This field is required!</S.TitleError>}
                    {errors.email && errors.email.type == "pattern" && <S.TitleError>Invalid email, please enter a valid email!</S.TitleError>}
                </S.ContainerInput>

                <S.ContainerInput>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-autowidth-label">Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            label="Subject"
                            defaultValue={""}
                            {...register("subject", { required: true })}
                        >
                            <MenuItem value={"Development"}>Development</MenuItem>
                            <MenuItem value={"Personal contact"}>Personal contact</MenuItem>
                            <MenuItem value={"Help with programming"}>Help with programming </MenuItem>
                            <MenuItem value={"Job vacancy"}>Job vacancy</MenuItem>
                            <MenuItem value={"General doubts"}>General doubts</MenuItem>
                        </Select>
                    </FormControl>

                    {errors.subject && <S.TitleError>This field is required!</S.TitleError>}
                </S.ContainerInput>

                <S.ButtonSubmit loading={loadingButtonSubmit} variant="outlined" type="submit">
                    Submit
                </S.ButtonSubmit>
            </S.Form>
        </S.Container>
    )
}

export default FormContact
