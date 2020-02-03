const express = require('express');
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello Node.js from Docker' });
});
app.listen(PORT, HOST, () => console.log('Express has been started..'));