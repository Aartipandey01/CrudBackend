
import db from '../config/db.js';

export const updateAllEmployeesStatus = async (status) => {
  try {
    const [result] = await db.promise().query(
      'UPDATE login SET WorkingStatus = ?',
      [status] 
    );
    return result;
  } catch (err) {
    throw err;
  }
};
