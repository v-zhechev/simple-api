import { RequestHandler } from 'express';
import * as postService from '../services/postService';

export const getAllPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
};

export const getSinglePost: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postService.getPostById(id);

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

export const addPost: RequestHandler = async (req, res, next) => {
  try {
    const currentUserId = req.currentUserId as string;
    const { name }: { name: string } = req.body;

    const post = await postService.addPost(name, currentUserId);

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

export const editPost: RequestHandler = async (req, res, next) => {
  try {
    const currentUserId = req.currentUserId as string;
    const { name }: { name: string } = req.body;
    const { id } = req.params;

    const post = await postService.updatePostById(id, name, currentUserId);

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

export const deletePost: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isDeleted = await postService.deletePostById(id);

    res.status(200).json({ isDeleted });
  } catch (error) {
    next(error);
  }
};
