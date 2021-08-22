const nodemailer = require('nodemailer')

require('dotenv').config()

exports.formSubmit = (req, res) => {
    const { name, email } = req.body
    sendEmail(name, email)
    res.render('success') 
}


// mail 
const sendEmail = async (name, email) => {
    // create SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASSWORD
        }
    })

    // message
    const message = {
        from: "Zino's Resume",
        to: email,
        subject: "no-reply",
        html: `Howdy ${name}, this is a mail confirming that your message was received.
               Please do not reply this message. I'll contact you in the next 12 hours.`
    }

    // send mail
    try {
        await transporter.sendMail(message)
    } catch(err) { console.log(error) }
}
