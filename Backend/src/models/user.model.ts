import { Schema, model } from "mongoose";
import { compareSync, genSalt, hashSync } from "bcrypt";
import { config } from "../config";

export type User = {
  id?: Number;
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: String
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
        const salt = await genSalt(parseInt(config.saltRounds))
        const hash = hashSync(password + config.pepper, salt)
        if (compareSync(hash, result.password)) {
          return result;
        }
      }
      return null
    }catch (err) {
      throw new Error(`Invalid email or password`)
    }
  }
}