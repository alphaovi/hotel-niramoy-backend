import { model, Schema } from 'mongoose';
import { THotelService } from './hotelService.interface';

const hotelServiceSchema = new Schema<THotelService>({
  
  serviceName: { type: String, required: true },
  icon: { type: String, required: true },
});


export const HotelServiceModel = model<THotelService>("HotelService", hotelServiceSchema);