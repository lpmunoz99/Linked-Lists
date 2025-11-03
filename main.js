import { LinkedList } from "./linkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt('eagle', 2)
console.log(list.getSize());