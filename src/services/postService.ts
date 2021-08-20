import { IPost } from '../interfaces/IPost';
import * as postRepository from '../repositories/postRepository';

export const addPost = async (name: string, userId: string): Promise<IPost> => {
  const result = await postRepository.savePost({ name, user_id: userId });

  return { id: result.id, name: result.name, user_id: result.user_id };
};

export const getAllPosts = async (): Promise<Array<IPost>> => {
  const result = await postRepository.getAllPosts();

  return result.map(({ id, name, user_id }) => ({ id, name, user_id }));
};

export const getPostById = async (id: string): Promise<IPost | null> => {
  const result = await postRepository.getPostById(id);

  if (!result) {
    return null;
  }

  return { id: result.id, name: result.name, user_id: result.user_id };
};

export const updatePostById = async (id: string, name: string, userId: string): Promise<IPost | null> => {
  await postRepository.updatePostById(id, name, userId);
  const result = await postRepository.getPostById(id);

  if (!result) {
    return null;
  }

  return { id: result.id, name: result.name, user_id: result.user_id };
};

export const deletePostById = async (id: string): Promise<boolean> => {
  const { deletedCount } = await postRepository.deletePostById(id);

  if (!deletedCount) {
    return false;
  }

  return deletedCount > 0;
};
