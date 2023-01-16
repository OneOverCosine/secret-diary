const KeyManager = require("./KeyManager");
const SecretDiary = require(`./SecretDiary`);


const myDiary = new SecretDiary();

// myDiary.addEntry(`Hello world!`);
KeyManager.unlock(myDiary);
myDiary.addEntry(`Hello world!`);
console.log(myDiary.getEntries());



