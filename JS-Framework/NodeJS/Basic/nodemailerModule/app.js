var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'tamoki1110@gmail.com',
        pass: 'T@moki110292'
    }
});

var mailOptions = {
    from: 'tamoki1110@gmail.com',
    to: 'loinguyenlamthanh@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error.message);
    } else {
        console.log('Email sent: ' + info.response);
    }
});