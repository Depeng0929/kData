import { HashMap } from "../../src/core/dictionary/hashMap";

const map = new HashMap<string>();
map.put("kdp", "123");
map.remove("kdp");
console.log(map);
