
import { Router } from 'express';
import { handleLogoutAll} from '../controller/logout.controller.js';

const router = Router();

router.route("/loggedout").post(handleLogoutAll);


export default router;
