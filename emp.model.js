import db from '../config/db.js';

const Employee = {
  getAllEmployees: async () => {
    const [rows] = await db.promise().query('SELECT * FROM employeetable');
    return rows;
  },

  createEmployee: async ({ Name, LastName, Email,Contact,Location,Address,Salary,WorkingStatus }) => {
    const sql = 'INSERT INTO employeetable (Name, LastName, Email,Contact,Location,Address,Salary,WorkingStatus) VALUES (?, ?,?,?,?,?,?,? )';
    const [result] = await db.promise().query(sql, [Name, LastName, Email,Contact,Location,Address,Salary,WorkingStatus]);
    return { id: result.insertId, Name, LastName, Email,Location,Address,Salary,WorkingStatus };
  },

  updateEmployee: async ( ID,{ Name, LastName, Email ,Contact,Location,Address,Salary,WorkingStatus}) => {
    const sql = 'UPDATE employeetable SET  Name = ?, LastName = ?, email = ? Email=? ,Contact=?,Location=?,Address=?,Salary=?,WorkingStatus=?,WHERE id = ?';
    const [result] = await db.promise().query(sql, [Name, LastName,  Email ,Contact,Location,Address,Salary,WorkingStatus]);
    if (result.affectedRows === 0) {
      throw new Error("No employee found with the given ID");
    }
    return result;
  },

  deleteEmployee : async (id) => {
    const [rows] = await db.promise().query('SELECT id FROM employeetable WHERE id = ?', [id]);
    if (rows.length === 0) {
      throw new Error("No employee found with the given ID");
    }

    
    const [result] = await db.promise().query('DELETE FROM employeetable WHERE id = ?', [id]);
    return result;
  }
};

export default Employee;



