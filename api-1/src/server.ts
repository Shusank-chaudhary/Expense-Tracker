import express, { type Application } from "express"
import router from "./router/router"
import { error } from "node:console"
import ExceptionHandlingMiddleware from "./middlewares/ExceptionHandlingMiddleware"
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import "./config/MongoDbConfig";

const app: Application = express()

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
const corsOptions: CorsOptions = {
    origin: function (origin, cb) {
        if (!origin || allowedOrigins.includes(origin)) {
            return cb(null, true);
        } else {
            return cb(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true  
}
app.use(cors(corsOptions));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 60000,
  limit: 30
})
app.use(limiter)

const PORT = 9005
const HOST = 'Localhost'

app.use(express.json());

app.use("/api/v1/", router);

app.use("/", (req, res, next) => {
    next({
        code: 404,
        message: "route/path does not exist",
        status: false
    })
})

app.use(ExceptionHandlingMiddleware);

app.listen(PORT, HOST, (err) => {
    if (!err) {
        console.log(`Server is running on url http:localhost:${PORT}`);
        console.log(`Press CTRL+C to discontinue server`);
    }
})