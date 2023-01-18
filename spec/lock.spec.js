import Lock from '../code/Lock.js'

xdescribe(`Lock creation tests`, () => {

    it(`should be locked when first made`, () => {
        expect(new Lock().isLocked()).toBeTrue();
    });

});