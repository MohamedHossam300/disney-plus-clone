import { Application, Request, Response } from "express";
import { hashSync, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserStore, User } from "../models/user.modle";
import { config } from "../config";

const store = new UserStore();

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const salt = await genSalt(parseInt(config.saltRounds))
        const hash = hashSync(req.body.password + config.pepper, salt)
        const users: User = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
        }
        const createUsers = await store.create(users);
        const token = sign(
            { users: createUsers },
            <string>config.tokenSecret
        );
        res.json(token);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const authentication = async (req: Request, res: Response): Promise<void> => {
    try {
        const createUsers = await store.authentication(req.body.email, req.body.password);
        res.json(createUsers);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const user_store = (app: Application) => {
    app.post("/users", create);
    app.post("/auth", authentication);
}

export default user_store;