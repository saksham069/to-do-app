// import e from "express";
import { writeFile, readFile } from "node:fs";

readFile("data.json", "utf-8", (err, data) => {
  if (err) {
    console.error("error occurred woop woop");
  }
  let dataJson = JSON.parse(data);
  dataJson.push({
    name: "maybe saksham",
    id: 4,
  });

  writeFile("data.json", JSON.stringify(dataJson, null, 2), (err) => {
    if (err) console.error("panga pae gya");
  });
});
