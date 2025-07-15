import { Router } from "express";
import empRouter from "./emp.routes.js";
import authRouter from "./auth.routes.js";
import logoutRouter from "./logout.routes.js";

const router = Router();

router.use("/auth",authRouter);
router.use("/emp", empRouter);
 router.use("/logout", logoutRouter);

export default router;