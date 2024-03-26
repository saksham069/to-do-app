import express from "express";
import { promises as fs } from "fs";
import { resolve } from "path";

const app = express();
const port = 3000;

app.use(express.static(resolve("../frontend/dist")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("../frontend/dist/index.html");
});

app.get("/data", async (req, res) => {
  let data = await fs.readFile("./data.json", "utf-8");
  res.send(data);
});

app.post("/submit", (req, res) => {
  newToDo(
    req.body.title.trimStart().trimEnd(),
    req.body.desc.trimStart().trimEnd()
  );
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}`);
});

const newToDo = async (title, desc) => {
  const data = await fs.readFile("data.json", "utf-8");

  const dataJson = JSON.parse(data || "[]");
  dataJson.push({
    title,
    desc,
    key: (dataJson[dataJson.length - 1]?.key ?? 0) + 1, // gotta fix
  });

  await fs.writeFile("data.json", JSON.stringify(dataJson, null, 2));
};
