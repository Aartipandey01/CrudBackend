

import db from '../config/db.js';

const Auth = {
  
  login: async (Username, Password) => {
    const sql = 'SELECT * FROM signin WHERE Username = ? AND Password = ?';
    const [results] = await db.promise().query(sql, [Username, Password]);
    return results.length > 0 ? results[0] : null;
  },

  
  signup: async (userData) => {
    const { Firstname, Lastname, Email, Username, Password } = userData;
    const sql = `INSERT INTO signin (Firstname, Lastname, Email, Username, Password)
                 VALUES (?, ?, ?, ?, ?)`;

    const [result] = await db.promise().query(sql, [
      Firstname,
      Lastname,
      Email,
      Username,
      Password
    ]);

    return {
      id: result.insertId,
      Firstname,
      Lastname,
      Email,
      Username,
      Password
    };
  }
};

export { Auth };
// import db from '../config/db.js';

// const Auth = {
//   login: async (Username, Password) => {
//     const sql = 'SELECT * FROM signin WHERE Username = ? AND Password = ?';
//     const [results] = await db.promise().query(sql, [Username, Password]);
//     return results.length > 0 ? results[0] : null;
//   },

//   signup: async ({ Firstname, Lastname, Email, Username, Password }) => {
//     const sql = `INSERT INTO signin (Firstname, Lastname, Email, Username, Password)
//                  VALUES (?, ?, ?, ?, ?)`;

//     const [result] = await db.promise().query(sql, [
//       Firstname,
//       Lastname,
//       Email,
//       Username,
//       Password
//     ]);

//     return {
//       id: result.insertId,
//       Firstname,
//       Lastname,
//       Email,
//       Username
//     };
//   }
// };

// export { Auth };
