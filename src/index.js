const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiLimiter = require('./limiter.js');
require('dotenv').config()


// MongoDB'ye bağlan
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
            console.log('Mail zaten kayıtlı');
            res.status(200).send('Mail zaten kayıtlı');
        } else {
            const mail = new Mail({ email });
            mail.save();
            console.log('Mail kaydedildi:', mail);
            res.status(200).send('Mail kaydedildi');
        }
    });
  } catch (err) {
    console.error('Mail kaydedilemedi:', err);
    res.status(500).send('Mail kaydedilemedi');
  }
});

app.listen(3000, () => {
  console.log('[SERVER] port 3000');
});
