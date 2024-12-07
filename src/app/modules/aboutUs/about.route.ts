import { Router } from 'express';

import { AboutControllers } from './about.controller';

const router = Router();

router.post('/create-about', AboutControllers.createAbout);

router.get("/about", AboutControllers.getAllAbouts);

router.patch("/about", AboutControllers.updateAbout);

export const AboutRoutes = router;
