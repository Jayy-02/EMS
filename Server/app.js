import express from "express";
import cors from "cors";
import mongodb, { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const app = express();
const port = 3000;

app.use(cors());

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

client
  .connect()
  .then(() => console.log("Mongodb connected successfully"))
  .catch(() => console.log("Failed to connect"));

const db = client.db("Employee_Data");

const info = db.collection("Personal_Details");

info
  .insertOne({ name: "Val", State: "Edo" })
  .then(() => console.log("Database has been updated"))
  .catch((error) => console.log(error + " Failed to update"));

async function main() {}

app.get("/", (req, res) => {
  let response = `Hello World <br>`;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
