
const connect = async () => {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/iphone")
    global.connection = connection
    return connection
}

connect();

const selectCustomers = async () => {
    const conn = await connect();
    return await conn.query('SELECT * FROM produto;');
}

module.exports = { selectCustomers}