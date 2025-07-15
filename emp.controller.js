
import Employee from "../model/emp.model.js";

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAllEmployees();
    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createEmployee = async (req, res) => {
  const { Name, LastName,Email,Contact,Location,Address,Salary,WorkingStatus } = req.body;
  if (!Name || !LastName || !Email||!Contact||!Location||!Address||!Salary||!WorkingStatus) {
    return res.status(400).json({ success: false, message: "all fields are required" });
  }

  try {
    const employeeData = await Employee.createEmployee({ Name, LastName, Email,Contact,Location,Address,Salary,WorkingStatus  });
    res.status(201).json({ success: true, message: "Data created successfully", data: employeeData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const ID= parseInt(req.params.id, 10);
  if (isNaN(ID)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  const {  Name, LastName,Email,Contact,Location,Address,Salary,WorkingStatus  } = req.body;
  if ( !Name || !LastName||!Email ||!Contact||!Location||!Address||!Salary||!WorkingStatus) {
    return res.status(400).json({ success: false, message: "all fields are required" });
  }

  try {
    await Employee.updateEmployee(ID, { Name, LastName, Email ,Contact,Location,Address,Salary,WorkingStatus});
    res.status(200).json({ success: true, message: "Employee updated successfully" });
  } catch (error) {
    if (error.message.includes("No employee found")) {
      return res.status(404).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    await Employee.deleteEmployee(id);
    res.status(200).json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    if (error.message.includes("No employee found")) {
      return res.status(404).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };
