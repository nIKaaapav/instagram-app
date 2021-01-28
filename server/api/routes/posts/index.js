import {Router} from "express";
import {PostsController, CreatePostController, UpdatePostController, DeletePostController} from './controller'
const route = Router();

export default mainRoute => {
    mainRoute.use('/poosts', route);

    // @route   GET  /poosts/
    // @desc    Returning all posts
    // @access  Private
    route.get('/', PostsController);

    // @route   POST  /poosts/craete
    // @desc    Post body / Returning created post
    // @access  Private
    route.post('/craete', CreatePostController);

    // @route   PUT  /poosts/:postId
    // @desc    Post body / Returning updated post
    // @access  Private
    route.put('/:postId', UpdatePostController);

    // @route   DELETE  /poosts/:postId
    // @desc    Delete selected post
    // @access  Private
    route.delete('/:postId', DeletePostController);
};