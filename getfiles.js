const fs = require("fs");
const path = require("path");

const folderPath = "./public/Weddings"; // Replace with your folder path

const files = fs
  .readdirSync(folderPath)
  .filter((file) => fs.statSync(path.join(folderPath, file)).isFile())
  .map((file) => ({ url: `/Weddings/${file}` }));

console.log(files);
