import express, { Application, json } from "express"
import mongoose from "mongoose";
import cors from "cors"
import { config } from "./src/config";
import movie_routes from "./src/handlers/movies.handler";

const app: Application = express()
const port: number = 8080;

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.connect(config.url).then((): void => {
    console.log("Database Connected");
}).catch((err): void => {
    throw new Error(err);
});

movie_routes(app)

app.use(json());

app.listen(port, (): void => {
    console.log(`This Server Is Running in http://localhost:${port}`)
})