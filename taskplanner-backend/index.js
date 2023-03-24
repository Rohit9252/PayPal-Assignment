const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const sprintRoutes = require('./routes/sprintRouter');
const taskRouter = require("./routes/taskRouter")


const PORT = process.env.PORT || 3000;

connectDB();



app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/users/sprint",sprintRoutes);
app.use("/api/users/task",taskRouter);
app.use(errorHandler);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

