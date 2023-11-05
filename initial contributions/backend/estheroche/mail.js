var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alady270@gmail.com',
        pass: 'heavencomedown'

    }
});
var mailOptions = {
    from: 'alady270@gmail.com',
    to: 'estheraladioche569@gmail.com',
    subject: 'Email set by Node JS',
    html: '<h1>welcome</h1><p>That is easy</p>'

};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email Sent: ' + info.response)
    }
})