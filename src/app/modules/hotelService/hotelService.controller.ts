import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { HotelServiceServices } from './hotelService.service';

const createHotelService = catchAsync(async (req, res) => {
  const result = await HotelServiceServices.createHotelServiceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'About is created successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await HotelServiceServices.getAllHotelServicesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotel Services are retrived successfully',
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const serviceId = req.params.serviceId;

  const result =
    await HotelServiceServices.getSingleHotelServiceFromDB(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Hotel Service is retrived successfully',
    data: result,
  });
});

const updateHotelService = catchAsync(async (req, res) => {
  const serviceId = req.params.serviceId;

  const result = await HotelServiceServices.updateHotelServiceIntoDB(
    serviceId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully updated your document',
    data: result,
  });
});

export const HotelServiceControlles = {
  createHotelService,
  getAllServices,
  getSingleService,
  updateHotelService,
};
