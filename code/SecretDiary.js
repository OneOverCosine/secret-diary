class SecretDiary {

    locked = true;
    entries = [];

    addEntry(str) {
        if (this.locked) throw new Error(`Cannot add entries when the diary is locked`);
        this.entries.push(str);
    }

    getEntries() {
        if (this.locked) throw new Error(`Cannot view entries when the diary is locked`);
        return this.entries;
    }

    // lock() {
    //     this.locked = true;
    // }

    // unlock() {
    //     this.locked = false;
    // }
};

export default SecretDiary;