import mongoose from 'mongoose';
import { TBlogPost } from './blogPost.interface';
import { BlogPostModel } from './blogPost.model';

const createBlogIntoDB = async (payload: TBlogPost) => {
  const result = await BlogPostModel.create(payload);

  return result;
};

const getAllPostFromDB = async () => {
  const result = await BlogPostModel.find();
  return result;
};

const getSinglePostFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await BlogPostModel.findOne({ _id: objectId });

  return result;
};

const deleteSinglePostFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await BlogPostModel.deleteOne({ _id: objectId });

  return result;
};

const updateSinglePostIntoDB = async (id: string, payload: Partial<TBlogPost>) => {
  const objectId = new mongoose.Types.ObjectId(id);

  const result = await BlogPostModel.findOneAndUpdate(
    { _id: objectId },
    payload,
    { new: true },
  );

  return result;
};

export const BlogPostServices = {
  createBlogIntoDB,
  getAllPostFromDB,
  getSinglePostFromDB,
  deleteSinglePostFromDB,
  updateSinglePostIntoDB,
};
