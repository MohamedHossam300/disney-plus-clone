import { Schema, model } from "mongoose";
import { compareSync } from "bcrypt";
import { config } from "../config";

export type User = {
  id?: Number;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
})

const users = model("User", userSchema)

export class UserStore {

  async create(user: User): Promise<User> {
    try {
      const createUsers = new users(user)
      const result = await createUsers.save()
      return result;
    } catch (err) {
      throw new Error(`Unable to index Users. Error: ${err}`)
    }
  }

  async authentication(email: string, password: string): Promise<User | null> {
    try {
      const result = await users.findOne({email}).exec()
      if (result) {
        if (compareSync(password + config.pepper, result.password)) {
          return result;
        }
      }
      return null
    }catch (err) {
      throw new Error(`Invalid email or password`)
    }
  }
}