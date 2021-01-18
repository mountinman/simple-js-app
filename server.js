const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_, res) => {
    console.log('get /');
    res.status(200).send('Server running');
});

app.post('/API/contact', cors(), (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('MESSAGE SENT!');
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
