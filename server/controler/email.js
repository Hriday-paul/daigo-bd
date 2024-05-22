const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: process.env.secure, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendMail = async (req, res) => {
    const { email, subject, message } = req.body
    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: email, // sender address
            to: process.env.SMTP_USER, // list of receivers
            subject: subject, // Subject line
            text: "email", // plain text body
            html: `<div style="padding: 40px; background-color: rgb(240, 240, 240);">
            <div style="background-color: white; padding: 40px; border-radius : 10px">
            <div style="background-color: green;">
            <h4 style="color: white; font-size : 22px; text-align : center; padding: 10px;">Daigo BD</h4>
            </div
            <div style="background-color: #fff; padding: 30px;">
            <p style="font-size : 23px">Hello Hriday paul,</p>
            <p style="font-weight: bold; font-size: 20px;">Subject : ${subject}</p>
            <p style="padding: 12px; font-size : 17px; border-left: 4px solid #d0d0d0; font-style: italic;">
              ${message}
            </p>
            <p style="font-size : 15px;">
              Best wishes,
            </p>
            </div>
            </div>
            </div>`, // html body
        });

        if(info.rejected.length !== 0){
            res.status(400).send({message : 'Message sent faild, try again !'})
        }
        res.status(200).send({message : 'Message sent successfully !', id : info.messageId})
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
};

module.exports = {
    sendMail
}

