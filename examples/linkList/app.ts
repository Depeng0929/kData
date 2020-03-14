import {DoublyLinkList} from "../../src/kdata";

const doublyLinkList = new DoublyLinkList();
doublyLinkList.push(1);
doublyLinkList.push(2);
doublyLinkList.push(3);

doublyLinkList.insert(4, 3);

console.log(doublyLinkList);
