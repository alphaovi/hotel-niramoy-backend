import { Router } from 'express';
import { HotelServiceControlles } from './hotelService.controller';
const router = Router();

router.post('/hotel-service', HotelServiceControlles.createHotelService);

router.get('/hotel-service', HotelServiceControlles.getAllServices);

router.get('/hotel-service/:serviceId', HotelServiceControlles.getSingleService);

router.patch(
  '/hotel-service/:serviceId',
  HotelServiceControlles.updateHotelService,
);

export const HotelServiceRoutes = router;
