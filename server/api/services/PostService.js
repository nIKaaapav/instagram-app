import {PostModel} from '../database/models/'

export default class PostService{
  /**
   * @description Create new post
   * @param {title,body,photo} 
   */
  async createPost({title,body,photo}){
   return PostModel.create({
    title,
    body,
    photo
   }) 
  }
  
  /**
   * @description All Posts
   * @param {} 
   */
  async getPosts({params= {}}){
    return PostModel.find({})
  }
}

