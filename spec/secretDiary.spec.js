
import SecretDiary from "../code/SecretDiary.js";
import KeyManager from "../code/KeyManager.js";

describe('secretDiary tests', () => {

    it('testing addEntries addition test', () => {
        //Arrange
        const secretDiary = new SecretDiary();
        KeyManager.unlock(secretDiary);

        //Act
        secretDiary.addEntry(`Hello World`);
        const result = secretDiary.entries[0];

        //Assert
        expect(result).toBe(`Hello World`);
    })


    it('testing getEntries ', () => {
        //Arrange
        const secretDiary = new SecretDiary();
        KeyManager.unlock(secretDiary);
        secretDiary.addEntry(`Hello World`);

        //Act
        const result = secretDiary.getEntries();

        //Assert
        expect(result).toBe(`Hello World`);
    })

}




)