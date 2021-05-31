const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
       const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre de usuario: ${name}</li>
            <li>Correo electrónico: ${email}</li>
            <li>Número de contacto: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    // console.log(contentHTML)
    // console.log("Contacto");
    const transporter = nodemailer.createTransport({
        host: 'mail.studio73pty.com',
        port: 587,
        secure: false,
        auth: {
            user: 'test_web@studio73pty.com',
            pass: '123456qwerty'
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    try {
        const info = await transporter.sendMail({
            from: "'Studio73pty Server' <test_web@studio73pty.com>",
            to: "jdiaz.97ma@gmail.com",
            subject:'Webiste contact form',
            //text:'hello world'
            html: contentHTML
        })
     
        console.log('message sent', info.messageId)
        // res.render('contacto', {msg: 'Email enviado'})
        res.redirect('https://studio73pty.studio73pty.com/');
    } catch (error) {
        console.log(error)
    }
    
    
});

module.exports = router;