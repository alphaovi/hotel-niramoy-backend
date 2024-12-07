import { TReviews } from './reviews.interface';
import { model, Schema } from 'mongoose';

const reviewSchema = new Schema<TReviews>({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  review: { type: String, required: true },
  image: { type: String, required: true },
});

export const ReviewModel = model<TReviews>('Review', reviewSchema);
