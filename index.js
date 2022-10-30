import express from "express";
import cors from "cors"
import usersRoutes from "./routes/users.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;
app.use(cors({origin: '*'}));

app.use(bodyParser.json());

app.get('/users', usersRoutes);

app.post('/users', usersRoutes);

app.get('/users/:id' , usersRoutes);

app.delete('/users/:id' , usersRoutes);

app.patch('/users/:id' , usersRoutes);

app.get('/', (req, resp) => {
    resp.send('Hello there')
} );

app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`) );