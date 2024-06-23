require('dotenv').config()
const {DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME} = process.env

const initOptions = {

    //connect events
    connect(e) {
        const cp = e.client.conectionParameters;
        console.log('Connected to database:', cp.database);
    },
}

const cn = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const pgp = require('pg-promise')(initOptions)
const db = pgp(cn);

module.exports = db;