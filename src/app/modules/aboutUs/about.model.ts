import  { model, Schema } from 'mongoose';
import { TAbout } from './about.interface';

const aboutSchema = new Schema<TAbout>({
  heading: { type: String, required: true },
  subHeading: { type: String, required: true },
  description: { type: String, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  image4: { type: String, required: true },
});

export const AboutModel = model<TAbout>("About", aboutSchema);
