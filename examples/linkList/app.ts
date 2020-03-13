import {LinkList} from "../../src/kdata";

const linkList = new LinkList();

linkList.push({ val: 1});
linkList.push({ val: 2});
linkList.push({ val: 3});


console.log(linkList.remvoeAt(1));
console.log(linkList);
