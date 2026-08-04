const nodemailer = require('nodemailer');
const app = require('express')();
const bodyParser = require('body-parser')
require('dotenv').config();

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers' || "*"));
    res.header("Access-Control-Allow-Methods", req.method);

    if (req.method === 'OPTIONS') {
        return res.status(204).send();
    }
    next();
});

app.post('/send', (req, res) => {

    const { FROM_EMAIL, FROM_PASS, TO_EMAIL } = process.env;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: FROM_EMAIL,
            pass: FROM_PASS
        }
    });

    const mailOptions = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: 'CrushFriend',
        text: JSON.stringify(req.body)
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('DEU RUIM');
            return res.status(500).send({ status: 'não enviado', err });
        } else {
            console.log('e-mail enviado')
            return res.send({ status: 'ok' });
        }
    })

})

app.get('/', (req, res) => {
    return res.send({ work: 'ok' });
})

app.listen(process.env.PORT || 9000, () => {
    console.log('API ATIVA');
});