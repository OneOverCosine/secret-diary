import SecretDiary from '../code/SecretDiary.js'

describe(`SecretDiary tests`, () => {

    describe(`Instantiation tests`, () => {
        it(`should report locked after instantiation`, () => {
            //Arrange
            const testLock = { isLocked: () => true };
            const secretDiary = new SecretDiary(testLock);

            //Assert
            expect(secretDiary.isLocked()).toBeTrue();
        });
    });

    it(`should call the locks isLocked method`, () => {
        //Arrange
        const testLock = { isLocked: () => true };
        const secretDiary = new SecretDiary(testLock);
        const mockLockSpy = spyOn(testLock, `isLocked`);

        //Act
        secretDiary.isLocked();

        //Assert
        expect(mockLockSpy).toHaveBeenCalled();
    });

    describe('Diary Locked tests', () => {

        let testLock;
        let secretDiary;

        beforeEach(() => {
            testLock = { isLocked: () => true };
            secretDiary = new SecretDiary(testLock);
        })

        afterEach(() => {
            secretDiary = undefined;
        })

        it(`should return an error when getEntries is called and diary is locked`, () => {

            //Assert
            expect(() => { secretDiary.getEntries() }).toThrowError(Error, `Diary is locked`);




        });

    })


});