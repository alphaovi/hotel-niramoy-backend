import mongoose from 'mongoose';
import { TReviews } from './reviews.interface';
import { ReviewModel } from './reviews.model';

const createReviewIntoDB = async (payload: TReviews) => {
  const result = await ReviewModel.create(payload);
  return result;
};

const getAllReviewsFromDB = async () => {
  const result = await ReviewModel.find();
  return result;
};

const getSingleReviewFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await ReviewModel.findOne({ _id: objectId });
  return result;
};

const deleteSingleReviewFromDB = async(id: string) => {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await ReviewModel.deleteOne(objectId);
    return result;
}



export const ReviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  deleteSingleReviewFromDB
};
