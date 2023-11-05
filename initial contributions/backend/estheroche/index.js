var express = require('express'); // Importing Required Modules:
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();   // Creating an Express Application and HTTP Server:
var server = http.Server(app);
var port = 500;
app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "page/index.html")));

//routing
app.get("/", function (req, response) {
    response.sendFile(path.join(__dirname, "page/index.html"))
})

app.post("/send_email", function (req, response) {
    var from = req.body.from;              // Email Sending Route:
    var to = req.body.to;
    var mesage = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alady270@gmail.com',
            pass: 'heavencomedown'
        }
    });
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sed: " + info.response)
        }
        response.redirect("/")
    })

})
// initialize web server
server.listen(port, function () {
    console.log("Starting server on port: " + port)
})