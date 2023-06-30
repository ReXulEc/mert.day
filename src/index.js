const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiLimiter = require('./limiter.js');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true, // Use SSL/TLS
    auth: {
      user: process.env.MAIL_USER, // Your email address
      pass: process.env.MAIL_PASS, // Your email password
    },
  });


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mailSchema = new mongoose.Schema({
  email: String,
});

const Mail = mongoose.model('users', mailSchema);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors( { origin: '*' }));

function generateAccessToken(data) {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '168h' });
}

let mailOptions = {
  from: process.env.MAIL_USER, // Sender email address
  to: undefined, // Recipient email address
  subject: undefined, // Email subject
  html: undefined,
};

async function sendMail(mailOptions) {
  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }
}

app.get('/', (req, res) => {
  res.status(200).json({status: 'ok'});
});

app.post('/sendMail', apiLimiter, async (req, res) => {
  const { email } = req.body;
      try {
        Mail.findOne({ 'email': email }).then(function (mail) {
            console.log(mail);
            if (mail) {
                console.log('[USER ERROR] ' + mail.email + ' already exists!');
                res.status(200).json({success: false, message: 'This email is already registered.'});
            } else {
                // mail send code here
                mailOptions = {
                  from: process.env.MAIL_USER, // Sender email address
                  to: email, // Recipient email address
                  subject: 'Confirm your Mail', // Email subject
                  html: `<p>Hi!</p>
                  <p>Thank you very much for signing up for my news list. From now on, I will send you a private e-mail about the events related to the projects I have done. But don't worry, you can unsubscribe from the mailing list whenever you want.</p>
                  <p>You can confirm your e-mail address by clicking <a href="https://api.mert.day/confirm/${generateAccessToken({ email: email })}">here</a>!</p>
                  <p>If you didn't send this request, you can act as if you didn't see this e-mail.</p>
                  <p>Sincerely,</br>- Mert Dogu</p>`, // HTML body (optional)
                };
                sendMail(mailOptions).then(() => {
                  res.status(200).json({success: true, message: 'Confirm your email address to subscribe.'});
                  console.log('[SUCCESS] New user:', email);
                });

            }
        });
      } catch (err) {
        console.error('[INVALID ERROR]', err);
        res.status(400).json({success: false, message: 'An invalid error occurred. Please try again later.'});
      }
});

app.get('/confirm/:auth', apiLimiter, async (req, res) => {
  let emailconfirm = '';
  jwt.verify(req.params.auth, process.env.TOKEN_SECRET, (err, verifiedJwt) => {
    if(err){
      res.send(err.message)
    }else{
      emailconfirm = verifiedJwt.email;
      try {
        Mail.findOne({ 'email': emailconfirm }).then(function (mail) {
            console.log(mail);
            if (mail) {
                console.log('[USER ERROR] ' + emailconfirm + ' already exists!');
                res.status(200).json({success: false, message: 'This email is already confirmed.'});
            } else {
                const mail = new Mail({ email: emailconfirm });
                mail.save();
                console.log('[SUCCESS] New user:', emailconfirm);
                res.redirect("https://mert.day?mailconfirm=true")

            }
        });
      } catch (err) {
        console.error('[INVALID ERROR]', err);
        res.status(400).json({success: false, message: 'An invalid error occurred. Please try again later.'});
      }
    }
  })

});

app.listen(4000, () => {
  console.log('[SERVER] port 4000');
});
