import KeyManager from "./KeyManager.js";
import SecretDiary from "./SecretDiary.js";


const myDiary = new SecretDiary();

// myDiary.addEntry(`Hello world!`);
KeyManager.unlock(myDiary);
myDiary.addEntry(`Hello world!`);
console.log(myDiary.getEntries());



