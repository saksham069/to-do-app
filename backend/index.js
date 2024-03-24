import express from "express";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}`);
});

const newToDo = async () => {
  const data = await fs.readFile("data.json", "utf-8");

  const dataJson = JSON.parse(data || "[]");
  dataJson.push({
    title: "to-do task",
    desc: "do this if you feel like it",
    key: (dataJson[dataJson.length - 1]?.key ?? 0) + 1, // gotta fix
  });

  await fs.writeFile("data.json", JSON.stringify(dataJson, null, 2));
};