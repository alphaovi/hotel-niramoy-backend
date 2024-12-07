import { TFeatureRooms } from './featureRooms.interface';
import { FeatureRoomModel } from './featureRooms.model';

const createFeatureRoomsIntoDB = async (payload: TFeatureRooms) => {
  const result = await FeatureRoomModel.create(payload);
  return result;
};

const getAllFeatureRoomsFromDB = async () => {
  const result = await FeatureRoomModel.find();
  return result;
};

// some problem here in the update function. data is not updating correctly.
const updateFeatureRoomsIntoDB = async (payload: TFeatureRooms) => {
  const result = await FeatureRoomModel.updateOne(
    {},
    { $set: payload },
    {
      new: true,
      upsert: true,
    },
  );

  return result;
};

export const FeatureRoomServices = {
  createFeatureRoomsIntoDB,
  getAllFeatureRoomsFromDB,
  updateFeatureRoomsIntoDB,
};
