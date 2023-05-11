import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express"
import { handleErros } from "./errors"
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import categoriesRoutes from "./routes/categories.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import scheduleRoutes from "./routes/schedules.routes";


const app:Application = express();
app.use(json())
app.use('/login',sessionRoutes)
app.use('/users',userRoutes)
app.use('/categories',categoriesRoutes)
app.use('/realEstate',realEstateRoutes)
app.use('/schedules',scheduleRoutes)
app.use(handleErros)


export default app