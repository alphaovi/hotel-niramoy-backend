import mongoose from 'mongoose';
import { THotelService } from './hotelService.interface';
import { HotelServiceModel } from './hotelService.model';

const createHotelServiceIntoDB = async (payload: THotelService) => {
  const result = await HotelServiceModel.create(payload);
  return result;
};

const getAllHotelServicesFromDB = async () => {
  const result = await HotelServiceModel.find();
  return result;
};

const getSingleHotelServiceFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await HotelServiceModel.findOne({ _id: objectId });

  return result;
};

const updateHotelServiceIntoDB = async (
  id: string,
  payload: Partial<THotelService>,
) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await HotelServiceModel.findOneAndUpdate(
    { _id: objectId },
    payload,
    { new: true },
  );

  return result;
};

export const HotelServiceServices = {
  createHotelServiceIntoDB,
  getAllHotelServicesFromDB,
  getSingleHotelServiceFromDB,
  updateHotelServiceIntoDB,
};
