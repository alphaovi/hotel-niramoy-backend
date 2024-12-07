import { TAbout } from "./about.interface";
import { AboutModel } from "./about.model";

const createAboutIntoDB = async(payload: TAbout) => {
    const result = await AboutModel.create(payload);
    return result;
}

const getAllAboutFromDB = async() => {
    const result = await AboutModel.find();
    return result;
}

const updateAboutIntoDB = async(payload: TAbout) => {
    const result = await AboutModel.updateOne({}, payload,{new: true, upsert: true});
    return result;
}



export const AboutServices = {
    createAboutIntoDB,
    getAllAboutFromDB,
    updateAboutIntoDB
}