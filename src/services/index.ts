import emailjs from "@emailjs/browser"

export const SendEmail = (template: any) => {
    emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID!, process.env.REACT_APP_YOUR_TEMPLATE_ID!, template, process.env.REACT_APP_YOUR_PUBLIC_KEY!)
}
