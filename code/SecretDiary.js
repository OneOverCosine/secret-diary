export default class SecretDiary {

    #lock;

    constructor(lock) {
        this.#lock = lock;
    }

    isLocked = () => this.#lock.isLocked();

    getEntries = () => {
        if (this.#lock.isLocked()) {
            throw new Error(`Diary is locked`)
        }
    };
}