const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Server running');
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
