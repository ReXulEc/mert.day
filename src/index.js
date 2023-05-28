const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiLimiter = require('./limiter.js');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mailSchema = new mongoose.Schema({
  email: String,
});

const Mail = mongoose.model('mails', mailSchema);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));


app.post('/mail', apiLimiter, async (req, res) => {
  const { email } = req.body;
      try {
        Mail.findOne({ 'email': email }).then(function (mail) {
            console.log(mail);
            if (mail) {
                console.log('[USER ERROR] ' + mail.email + ' already exists!');
                res.status(200).json({success: false, message: 'This email is already registered.'});
            } else {
                const mail = new Mail({ email });
                mail.save();
                console.log('[SUCCESS] New user:', mail.email);
                res.status(200).json({success: true, message: 'Thanks for signing up! You can always unsubscribe by clicking the link at the bottom of our emails.'});
            }
        });
      } catch (err) {
        console.error('[INVALID ERROR]', err);
        res.status(400).json({success: false, message: 'An invalid error occurred. Please try again later.'});
      }
});

app.listen(4000, () => {
  console.log('[SERVER] port 4000');
});
