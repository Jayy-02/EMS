import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mongodb, { MongoClient } from "mongodb";
import bodyParser from "body-parser";
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Mongodb connected successfully")

    const dataSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
    });

    const DataModel = mongoose.model("Data", dataSchema);

    app.post("/api/data", async (req, res) => {
      const { name, email, password } = req.body;
      const newData = new DataModel({name, email, password})
      try {
        await newData.save()
        res.status(200).send({
          status: 'success',
          message: 'Data saved successfully'
        })
      }
      catch (error) {
        res.status(500).send({
          status: 'error',
          message: 'Error saving data'
        })
      }
    });

    app.get("/", (req, res) => {
      res.send("respond");
    });
  })
  .catch(() => {
    console.log("Failed to connect")
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
