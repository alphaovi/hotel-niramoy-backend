import { model, Schema } from 'mongoose';
import { TFeatureRooms } from './featureRooms.interface';

const featureARoomSchema = new Schema<TFeatureRooms>({
  mainTitle: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  roomType: { type: String, required: true },
  amount: { type: Number, required: true, default: 2 },
  adultMembersNumber: { type: Number, required: true },
  childNumber: { type: Number, required: true, default: 0 },
});

export const FeatureRoomModel = model<TFeatureRooms>(
  'Feature',
  featureARoomSchema,
);
