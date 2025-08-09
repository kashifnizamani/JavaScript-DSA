import { hashmap } from "./hashmap.js";

let hash = hashmap(16,0.8);

hash.set("carlos", "hello carlos");
hash.set("carlos", "goodbye carlos");
hash.set("kashif", "22sw052")



console.log(hash.arr);
console.log(hash.get("carlos"));