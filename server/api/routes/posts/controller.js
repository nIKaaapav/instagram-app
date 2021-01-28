import { PostMapper } from "../../mappers";
import PostService from "../../services/PostService";

export const PostsController = async (request, response) => {
  const result = await new PostService().getPosts({});


  response
    .status(200)
    .json({
      status: true,
      data: Array.isArray(result) ? result.map(item => PostMapper.purePost(item)) : []
    })
};


export const CreatePostController = async ( request, response) => {

  response
    .status(201)
    .json({
      status: true,
    })
};

export const UpdatePostController = ( request, response) => {
  response
  .status(201)
  .json({
    status: true,
  })
};

export const DeletePostController = ( request, response) => {
  response
  .status(201)
  .json({
    status: true,
  })
};