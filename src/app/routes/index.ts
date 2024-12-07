import { Router } from 'express';
import { AboutRoutes } from '../modules/aboutUs/about.route';
import { FeatureRoomRouter } from '../modules/featureRooms/featureRooms.route';
import { HotelServiceRoutes } from '../modules/hotelService/hotelService.route';
import { ReviewRoutes } from '../modules/reviews/review.route';
import { BlogPostRoutes } from '../modules/blogPost/blogPost.route';

const router = Router();

const moduleRoutes = [
  
  {
    path: '/about',
    route: AboutRoutes,
  },
  {
    path: '/feature-room',
    route: FeatureRoomRouter,
  },
  {
    path: '/hotel-service',
    route: HotelServiceRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes
  },
  {
    path: "/blog-post",
    route: BlogPostRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
