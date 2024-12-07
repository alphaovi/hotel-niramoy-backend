import { z } from 'zod';

const createAboutValidationSchema = z.object({
  heading: z.string(),
  subHeading: z.string(),
  description: z.string(),
  image1: z.string(),
  image2: z.string(),
  image3: z.string(),
  image4: z.string(),
});

export const AboutValidation = {
  createAboutValidationSchema,
};
