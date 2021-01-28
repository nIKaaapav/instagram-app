import { UserMapper } from "../../mappers";
import AuthService from "../../services/AuthService";
import {UserModel} from '../../database/models'
import StatusService from "../../services/StatusService";
export const RegisterController = async (request, response) => {
  const {name, email, firstName, lastName, password, photo} = request.body;

  try{
    if (await UserModel.findOne({ email })) {
      throw new Error("Already exist")
    }
    const {user, token} = await new AuthService().registerUser({name, email, firstName, lastName, password, photo})
    response
      .status(201)
      .json(
        StatusService.buildResponse(
          true,
          {user: UserMapper.createdUser(user), token})
      )
  }
  catch(err){
    response.json(StatusService.buildError(err.message, err.status))
  }
};

export const LoginController = async (request, response) => {
  const {email, password} = request.body;

  try {
    const {user, token, error} = await new AuthService().loginUser({email, password})
    if (error) {
      throw new Error(error)
    } else{
      response
      .status(201)
      .json(
        StatusService.buildResponse(
          true,
          {user: UserMapper.loginUser(user), token})
      )
    }
  } catch (error) {
    response.json(StatusService.buildError(error.message, error.status))
  }

}