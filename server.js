import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';

// Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('MongoDB Connected!');
    } catch (error) {
        console.log(error);
    }
};

start();
