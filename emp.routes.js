import {Router} from 'express';

import {getEmployees,createEmployee,updateEmployee,deleteEmployee } from '../controller/emp.controller.js';

const router=Router();

router.route("/get").get(getEmployees);
router.route("/createEmployee").post(createEmployee);
router.route("/update/:id").put(updateEmployee);
router.route("/delete/:id").delete(deleteEmployee);

export default router;