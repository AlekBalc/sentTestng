import { Router } from 'express';
import {
	createPost,
	deletePost,
	readPost,
	readPosts,
	updatePost,
	readPostsFollowing,
} from '../APIs/controllers/postController';
import { checkOwnership } from '../middlewares/authentication';

export const postRouter = Router();

postRouter.get('/following/', readPostsFollowing);

postRouter.post('/', checkOwnership('posts'), createPost);

postRouter.get('/:id', readPost);

postRouter.get('/', readPosts);

postRouter.put('/:id', checkOwnership('posts'), updatePost);

postRouter.delete('/:id', checkOwnership('posts'), deletePost);
