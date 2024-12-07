import { Router } from "express";
import { ReviewControllers } from "./review.controller";


const router = Router();

router.post("/reviews", ReviewControllers.createReview);

router.get("/reviews", ReviewControllers.getAllReviews);


router.get("/reviews/:reviewId", ReviewControllers.getSingleReview)


router.delete("/reviews/:reviewId", ReviewControllers.deleteSingleReview);

export const ReviewRoutes = router;