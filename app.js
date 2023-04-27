const express = require("express");
require("dotenv").config();
const TranslateService = require("./translate");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("test");
});

app.post("/translate", async (req, res) => {
  const translatedText = await TranslateService(
    req.body.text,
    req.header("lang")
  );
  res.send({ text: translatedText });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
