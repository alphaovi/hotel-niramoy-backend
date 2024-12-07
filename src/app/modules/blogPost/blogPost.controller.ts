import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogPostServices } from './blogPost.service';

const createBlogPost = catchAsync(async (req, res) => {
  const result = await BlogPostServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post created successfully',
    data: result,
  });
});

const getAllBlogPost = catchAsync(async (req, res) => {
  const result = await BlogPostServices.getAllPostFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Post Get',
    data: result,
  });
});

const getSinglePost = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const result = await BlogPostServices.getSinglePostFromDB(postId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Post Retrived',
    data: result,
  });
});

const deleteSinglePost = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const result = await BlogPostServices.deleteSinglePostFromDB(postId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully Deleted',
    data: result,
  });
});

const updateSinglePost = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const result = await BlogPostServices.updateSinglePostIntoDB(
    postId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully updated your document',
    data: result,
  });
});

export const BlogPostControllers = {
  createBlogPost,
  getAllBlogPost,
  getSinglePost,
  deleteSinglePost,
  updateSinglePost,
};
