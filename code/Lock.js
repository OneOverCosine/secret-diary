export default class Lock {
    #locked = true;

    isLocked = () => { return this.#locked };
}