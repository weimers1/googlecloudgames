import express from "express";
import { db } from "./database/connection.js";
import 'dotenv';

const PORT = process.env.PORT || 3000;

// create express app instance
const app = express();

// set app to listen on specified port
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

// test connection to sequelize database
try {
    await db.authenticate();
    console.log('Connection to MySQL has been established successfully.');
} catch (error) {
    console.error('Unable to connect to MySQL:', error);
}

app.get('/', (request, response) => {
    return response.status(200).send('hello world');
});