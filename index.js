import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from "./src/config/sequelize.js";

import memberRoutes from "./src/routes/memberRoutes.js";
import borrowRoutes from './src/routes/borrowRoutes.js';
import authorRoutes from "./src/routes/authorRoutes.js";
import bookRoutes from "./src/routes/bookRoutes.js";

import errorHandling from "./src/middlewares/errorhandler.js"


dotenv.config();



const app = express();
const port = process.env.PORT || 3001;

//MiddleWares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", memberRoutes);
app.use("/api", borrowRoutes);
app.use("/api/", authorRoutes);
app.use("/api/",bookRoutes);


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