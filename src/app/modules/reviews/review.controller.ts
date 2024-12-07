import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is created successfully',
    data: result,
  });
});

const getAllReviews = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review is retrived successfully',
    data: result,
  });
});

const getSingleReview = catchAsync(async (req, res) => {
  const reviewId = req.params.reviewId;

  const result = await ReviewServices.getSingleReviewFromDB(reviewId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Review is retrived successfully',
    data: result,
  });
});

const deleteSingleReview = catchAsync(async (req, res) => {
  const reviewId = req.params.reviewId;
  const result = await ReviewServices.deleteSingleReviewFromDB(reviewId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Review is deleted successfully',
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
  getAllReviews,
  getSingleReview,
  deleteSingleReview,
};
