class SecretDiary {

    locked = true;
    entries = [];

    addEntry(str) {
        if (this.locked) throw new Error(`AAHHHHHH`);
        this.push(str);
    }

    getEntries() {
        if (this.locked) throw new Error();
        return this.entries;
    }

    lock() {
        this.lock = true;
    }

    unlock() {
        this.unlock = false;
    }
};

module.exports = SecretDiary;