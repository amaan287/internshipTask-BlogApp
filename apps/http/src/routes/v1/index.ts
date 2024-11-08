import { Router } from "express";
import { userRoutes } from "./user";
import { authRoutes } from "./auth";
import { postRoutes } from "./post";

export const router = Router();

router.use("/user", userRoutes);
router.use("/", authRoutes);
router.use("/", postRoutes);
