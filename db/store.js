const fs = require('fs/promises');
const {v4: uuidv4} = require('uuid');

class Store {
    read() {
        return fs.readFile('db/db.json', 'utf-8');
    };
    write(none) {
        return fs.writeFile('db/db/json', JSON.stringify(note));
    };

    getNotes() {
        
    }
}