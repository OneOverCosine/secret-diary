
import SecretDiary from "../code/SecretDiary.js";
import KeyManager from "../code/KeyManager.js";

/*
Test 1 that diary is locked when created
Test 2 
Test 1 addEntries
Test 2 
*/

describe(`SecretDiary property tests`, () => {
    it(`SecretDiary is locked when created`, () => {
        // Arrange
        const secretDiary = new SecretDiary();

        // Act
        const result = secretDiary.locked;

        // Assert
        expect(result).toBe(true);
    });
});


// describe('secretDiary tests', () => {

//     it('testing addEntries addition test', () => {
//         //Arrange
//         const secretDiary = new SecretDiary();
//         KeyManager.unlock(secretDiary);

//         //Act
//         secretDiary.addEntry(`Hello World`);
//         const result = secretDiary.entries[0];

//         //Assert
//         expect(result).toBe(`Hello World`);
//     });


//     it('testing getEntries ', () => {
//         //Arrange
//         const secretDiary = new SecretDiary();
//         KeyManager.unlock(secretDiary);
//         secretDiary.addEntry(`Hello World`);

//         //Act
//         const result = secretDiary.getEntries();

//         //Assert
//         expect(result).toBe(`Hello World`);
//     });

// });