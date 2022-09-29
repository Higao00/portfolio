import emailjs from "@emailjs/browser"

export const SendEmail = (template: any) => {
    emailjs.send(process.env.YOUR_SERVICE_ID!, process.env.YOUR_TEMPLATE_ID!, template, process.env.YOUR_PUBLIC_KEY!)
}
