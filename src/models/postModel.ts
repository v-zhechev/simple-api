import mongoose, { Document } from 'mongoose';
import { randomUUID } from 'crypto';
import { IPost } from '../interfaces/IPost';

const Post = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => randomUUID(),
      index: true,
    },
    name: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true },
);

export const postModel = mongoose.model<IPost & Document>('Post', Post);
