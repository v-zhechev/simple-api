import { Document, UpdateWriteOpResult } from 'mongoose';
import { IPost, IPostInputDTO } from '../interfaces/IPost';
import { postModel } from '../models/postModel';

export const savePost = async (post: IPostInputDTO): Promise<IPost & Document> => await postModel.create(post);

export const getAllPosts = async (): Promise<Array<IPost & Document>> => await postModel.find({}).exec();

export const getPostById = async (id: string): Promise<(IPost & Document) | null> => await postModel.findOne({ id }).exec();

export const updatePostById = async (id: string, name: string, userId: string): Promise<UpdateWriteOpResult> =>
  await postModel.updateOne({ id }, { name, user_id: userId }).exec();

export const deletePostById = async (
  id: string,
): Promise<{ ok?: number | undefined; n?: number | undefined } & { deletedCount?: number | undefined }> =>
  await postModel.deleteOne({ id }).exec();
