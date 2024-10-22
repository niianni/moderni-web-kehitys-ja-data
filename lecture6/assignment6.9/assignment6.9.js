import fs from "fs";

let laulu = fs.readFileSync("textfile.txt", "utf-8");

console.log(laulu);

let newLaulu = laulu
    .replace(/Joulu/g, "Kinkku")
    .replace(/joulu/g, "kinkku")
    .replace(/Lapsilla/g, "Poroilla")
    .replace(/lapsilla/g, "poroilla");

console.log(newLaulu);
    
fs.writeFileSync("textfile.txt", newLaulu, "utf-8");