const express = require('express');
var cors = require('cors')
const phones = require('./phones.json')
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('phone er website')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id);
    res.send(phone)

})
app.listen(3000)