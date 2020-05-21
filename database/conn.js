let mongoose = require('mongoose');

const server = 'root:mCrPa1HsJbUHw3in@nodeapi-cmhdp.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'test'; // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb+srv://${server}/${database}?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                console.log('Database connection successful');
                console.log(JSON.stringify(mongoose.model,null, 4)); // localhost
                
                //console.log(mongoose.db.port); // 27017
                //console.log(mongoose.db.name); // myDatabase*/
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()