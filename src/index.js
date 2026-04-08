import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'
import memberRoutes from "./routes/memberRoutes.js"
import errorHandling from "./middlewares/errorhandler.js"
import createMemberTable from './data/createMemberTable.js';
import borrowRoutes from './routes/borrowRoutes.js'

dotenv.config();

const app = express();
const port = process.env.port || 3001;

//MiddleWares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", memberRoutes);
app.use("/api", borrowRoutes);

//Error handling middleware
app.use(errorHandling);


//Create table  before starting server
createMemberTable();  


//Testing  POSTGRES Connection
app.get("/", async(req,res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is: ${result.rows[0].current_database}`)
})

//Server Running
app.listen(port, () => {
  console.log(`our port is very much running on http://localhost:${port}`)
})