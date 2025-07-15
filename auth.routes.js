import {Router} from 'express';
import {loginUser,signup} from '../controller/auth.controller.js';

const router=Router();

router.route("/login").post(loginUser);
router.route("/signup").post(signup);


export default router;