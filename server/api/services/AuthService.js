import { UserModel } from "../database/models";
import gravatar from 'gravatar';
import {randomBytes} from 'crypto'
import argon2 from 'argon2'
import jwt from "jsonwebtoken";
import config from "../../config"

export default class AuthService{

  /**
   * @description LOGIN USER / RETURN USER AND TOKEN
   */
  async loginUser({email, password}){
    let err = '';
    const user = await UserModel.findOne({email})
      if (!user) {
        err.user = "User not found"
        return err;
      }

      if (await argon2.verify(user.password, password)) {
        // Create JWT Payload
        return {
          user: user, 
          token: this.generateToken(user._id)
        }

      } else {
        err.password = 'Password incorrect';
        return err;
      }

    
  }


  /**
   * @description Register a new user. Create item in UserCollection and save a picture
   */
  async registerUser({name, email, password,firstName,lastName, photo}){
  
    const salt = randomBytes(12);
    const pswd = await argon2.hash(password, {salt})
   
      const avatar = gravatar.url(email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });
    
      const user = await UserModel.create({
        name,
        email,
        firstName,
        lastName,
        password: pswd,
        photo: photo ? photo : avatar
      })
      
      return {
        user, 
        token: this.generateToken(user._id)
      }
    
    
  };

  /**
   * @description Generate JWT TOKEN
   * @param {string} userID 
   */
  generateToken(userId) {
		const today = new Date();
		const exp = new Date(today);
		exp.setDate(today.getDate() + 60);

		return jwt.sign(
			{
				id: userId,
				exp: exp.getTime() / 1000,
			},
			config.JWT_SECRET,
		);
	}

}