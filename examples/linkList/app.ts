import { LinkList } from "../../src/core/linkList";

const linkList = new LinkList();
linkList.push(5);
linkList.push(1);
linkList.push(2);
linkList.push(3);
linkList.push(4);
linkList.push(6);
linkList.push(9);
linkList.push(7);
linkList.push(10);
linkList.push(8);
linkList.sort();
console.log(linkList.shift());
