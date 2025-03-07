const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());


app.use(express.static(path.join(__dirname,'../script')));
app.use(express.static(path.join(__dirname,'../views')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.post('/data', (req, res) => {
    console.log(`Received data: ${JSON.stringify(req.body, null, 2)}`);
    res.json({ message: `You entered: ${req.body.data}` });
})

app.listen(3000, () => {
    console.log('server is running on port localhost:3000');
})
