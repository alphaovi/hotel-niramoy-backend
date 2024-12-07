import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AboutServices } from './about.service';

const createAbout = catchAsync(async (req, res) => {
  const result = await AboutServices.createAboutIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'About is created successfully',
    data: result,
  });
});

const getAllAbouts = catchAsync(async(req, res) => {
  const result = await AboutServices.getAllAboutFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Abouts are retrived successfully",
    data: result
  })
});


const updateAbout = catchAsync(async(req, res) => {
  const result = await AboutServices.updateAboutIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About updated successfully",
    data: result
  })
})

export const AboutControllers = {
  createAbout,
  getAllAbouts,
  updateAbout
};
