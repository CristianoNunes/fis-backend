import "reflect-metadata";
import express from "express";
const cors = require("cors");

import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running"));
