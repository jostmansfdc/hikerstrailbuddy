const { Client } = require('pg')
const client = new Client()

client.connect()

client.query('CREATE TABLE \"session\" (\"sid" varchar NOT NULL COLLATE \"default\", \"sess\" json NOT NULL, \"expire\" timestamp(6) NOT NULL) WITH (OIDS=FALSE); ALTER TABLE \"session\" ADD CONSTRAINT \"session_pkey\" PRIMARY KEY (\"sid\") NOT DEFERRABLE INITIALLY IMMEDIATE;', (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World!
    client.end()
})
