import emailjs from "@emailjs/browser"

export const SendEmail = (template: any) => {
    emailjs.send(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, template, import.meta.env.VITE_YOUR_PUBLIC_KEY)
}
