import {Router} from 'express';

import auth from './routes/auth';
import posts from './routes/posts';

export default () => {
    const router = Router();

    auth(router);
    posts(router);

    return router;
}
