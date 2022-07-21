const express = require("express");
const cors = require("cors");
const app = express();

// Enable cors security headers
app.use(cors());

// add an express method to parse the POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { DB_PORT, DB_NAME, DB_HOST, MYSQL_HOST_IP, DB_PASSWORD, DB_USER } =
  process.env;

// home page
app.get("/", (req, res) => {
  let x = 0.0001;
  for (let i = 0; i <= 1000000; i++) {
    x += Math.sqrt(x);
  }

  res.status(200).json({
    DB_PORT,
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
    DB_USER,
    MYSQL_HOST_IP,
  });
});

// home page
app.get("/metrics", (req, res) => {
  res.status(200).send("Send metrics");
});

app.get("/health", (req, res) => {
  // your health check logic goes here
  res.status(200).send();
});

app.get("/ready", (req, res) => {
  // your readiness check logic goes here
  res.status(200).send();
});

app.listen("3001", () => {
  console.log("Node running on PORT: " + process.env.PORT);
});
