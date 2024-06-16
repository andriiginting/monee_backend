const express = require('express');
const app = express();
const PORT = 3000; //will replace from .ENV

app.get('/', (req, res) => {
    res.send('<h1>Hello, your server up and running!</h1>');
});

// run and listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});