import { z } from 'zod';

export const featureRoomsValidation = z.object({
  mainTitle: z.string().nonempty('mainTitle is required'),
  title: z.string().nonempty('Title is required'),
  image: z.string().url('Image must be a valid URL'),
  roomType: z.string().nonempty('Room type is required'),
  amount: z.number().min(0, 'Amount must be a positive number'),
  adultMembersNumber: z
    .number()
    .min(1, 'At least one adult member is required'),
  childNumber: z.number().min(0, 'Child number must be 0 or greater'),
});

export const TFeatureRoomValidation = {
  featureRoomsValidation,
};
