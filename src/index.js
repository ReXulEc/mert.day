const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiLimiter = require('./limiter.js');
require('dotenv').config()
const jwt = require('jsonwebtoken');

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
                
                res.status(200).json({success: true, message: 'Confirm your email address to subscribe.'});
                console.log(generateAccessToken({ email: email }))

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
                res.status(200).json({success: true, message: 'Thanks for signing up! You can always unsubscribe by clicking the link at the bottom of our emails.'});

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
