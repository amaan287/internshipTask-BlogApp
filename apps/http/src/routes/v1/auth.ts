import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/signup", (req, res) => {
  res.json({
    message: "signup",
  });
});
authRoutes.post("/signin", (req, res) => {
  res.json({
    message: "signin",
  });
});
