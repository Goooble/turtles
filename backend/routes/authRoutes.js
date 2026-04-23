import express from "express";
import {
  signup,
  login,
  logout,
  dashboard,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard", authMiddleware, dashboard);

export default router;
