const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'homePage.html'));
 });
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
 });