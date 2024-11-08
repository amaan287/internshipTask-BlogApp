import { Router } from "express";

export const postRoutes = Router();

postRoutes.get("/allPosts", (req, res) => {
  res.json({
    message: "getPosts",
  });
});
postRoutes.post("/createPost", (req, res) => {
  res.json({
    message: "createPost",
  });
});
postRoutes.put("/post/:postId", (req, res) => {
  res.json({
    message: "updatePost",
  });
});
postRoutes.delete("/:postId", (req, res) => {
  res.json({
    message: "deletePost",
  });
});
