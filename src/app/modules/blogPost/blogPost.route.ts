import { Router } from "express";
import { BlogPostControllers } from "./blogPost.controller";

const router = Router();

router.post("/blog-post", BlogPostControllers.createBlogPost);

router.get("/blog-post", BlogPostControllers.getAllBlogPost);

router.get("/blog-post/:postId", BlogPostControllers.getSinglePost);

router.patch("/blog-post/:postId", BlogPostControllers.updateSinglePost);

router.delete("/blog-post/:postId", BlogPostControllers.deleteSinglePost);

export const BlogPostRoutes = router;