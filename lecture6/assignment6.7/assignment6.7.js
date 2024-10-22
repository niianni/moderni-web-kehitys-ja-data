import { name, age, } from "./export.js";
import helloModule from "./export.js";

helloModule();

console.log(`Imported name is ${name}`);
console.log(`Imported age is ${age}`);
