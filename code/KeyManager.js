class KeyManager {

    static lock = (item) => { item.locked = true };
    static unlock = (item) => { item.locked = false };
}




module.exports = KeyManager;