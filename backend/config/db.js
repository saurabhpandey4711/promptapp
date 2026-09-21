// import mysql from "mysql2";
// import dotenv from "dotenv";

// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.log("❌ Database Connection Failed");
//     console.log(err);
//     return;
//   }

//   console.log("✅ MySQL Connected Successfully");
// });

// export default db;

import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306 || 3307,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ...(isProduction && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Failed");
    console.log(err);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

export default db;