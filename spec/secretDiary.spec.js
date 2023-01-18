import SecretDiary from '../code/SecretDiary.js'

describe(`SecretDiary tests`, () => {

    describe(`Instantiation tests`, () => {
        it(`should report locked after instantiation`, () => {
            const testLock = { isLocked: () => true };
            const secretDiary = new SecretDiary(testLock);
            expect(secretDiary.isLocked()).toBeTrue();
        });
    });

});