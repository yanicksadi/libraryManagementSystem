import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from "./config/sequelize.js";

import memberRoutes from "./routes/memberRoutes.js"
import errorHandling from "./middlewares/errorhandler.js"
import borrowRoutes from './routes/borrowRoutes.js';

dotenv.config();



const app = express();
const port = process.env.PORT || 3001;

//MiddleWares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", memberRoutes);
app.use("/api", borrowRoutes);

//Error handling middleware
app.use(errorHandling);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected successfully");

    await sequelize.sync({ alter: true });
    console.log("Database synced");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch(err) {
    console.error("error starting server:", err);
  }
};

startServer();










// //Create table  before starting server
// createMemberTable();  


// //Testing  POSTGRES Connection
// app.get("/", async(req,res) => {
//   // const result = await pool.query("SELECT current_database()");
//   res.send(`The database name is: ${result.rows[0].current_database}`)
// })

// //Server Running
// app.listen(port, () => {
//   console.log(`our port is running on http://localhost:${port}`)
// })