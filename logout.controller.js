
import { updateAllEmployeesStatus } from '../model/logout.model.js';

export const handleLogoutAll = async (req, res) => {
  try {
    
    console.log("Received body:", req.body);

    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Missing status in request body'
      });
    }

    const result = await updateAllEmployeesStatus(status);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: 'Logged out successfully',
        result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No employees were logged out',
        result
      });
    }
  } catch (err) {
    console.error('Logout DB error:', err);
    return res.status(500).json({
      success: false,
      message: 'Logout failed',
      error: err.message
    });
  }
};
