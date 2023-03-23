const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');


const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

