const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

