import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FeatureRoomServices } from './featureRooms.service';

const createFeatureRoom = catchAsync(async (req, res) => {
  const result = await FeatureRoomServices.createFeatureRoomsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feature room is created successfully',
    data: result,
  });
});

const getAllFeatureRoom = catchAsync(async (req, res) => {
  const result = await FeatureRoomServices.getAllFeatureRoomsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feature room is retrived successfully',
    data: result,
  });
});

const updateFeatureRoom = catchAsync(async (req, res) => {
  const result = await FeatureRoomServices.updateFeatureRoomsIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feature room is updated successfully',
    data: result,
  });
});

export const FeatureRoomControllers = {
  createFeatureRoom,
  getAllFeatureRoom,
  updateFeatureRoom,
};
