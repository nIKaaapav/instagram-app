import {Router} from 'express';

import {LoginController, RegisterController} from './controller'
const route = Router();

export default mainRoute => {
    // Prefix  /auth
    mainRoute.use('/auth', route);


    // @route   POST  /auth/register
    // @desc    Register User / Returning JWT Token
    // @access  Public
    route.post('/register', RegisterController);

    // @route   GET  /auth/login
    // @desc    Login User / Returning JWT Token
    // @access  Public
    route.post('/login', LoginController);
};
