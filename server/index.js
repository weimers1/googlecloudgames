import express from "express";
import { PORT, DB_CONNECTION_STRING } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

app.get('/', (request, response) => {
    return response.status(200).send('hello world');
});

mongoose
    .connect(DB_CONNECTION_STRING)
    .then((response) => {
        console.log('Connected to database.');
    })
    .catch((error) => {
        // @TODO: email errors
        console.log(error);
    });