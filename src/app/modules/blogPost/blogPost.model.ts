import { model, Schema } from 'mongoose';
import { TBlogPost } from './blogPost.interface';

const blogPostSchema = new Schema<TBlogPost>(
  {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  { timestamps: true },
);

export const BlogPostModel = model<TBlogPost>('BlogPost', blogPostSchema);
