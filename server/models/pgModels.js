const { Pool } = require("pg");

const PG_URI =
  "postgres://ewtakjqc:ueFSqlUGwAAioxiHKQ59Ss9iz21269_r@queenie.db.elephantsql.com/ewtakjqc";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

// const text = 'SELECT * FROM cars'
// pool.query(text)
//   .then(response =>
//     console.log(response.rows))
//   .catch(err => {
//     console.log(err);
//   })
