import { Application, Request, Response } from 'express'
import { MovieStore } from '../models/movies.model'

const store = new MovieStore()

const index = async (_req: Request, res: Response) => {
    try {
        const movies = await store.index()
        res.json(movies)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const getMovie = async (req: Request, res: Response) => {
    try {
        const movie = await store.show(req.params.id)
        res.json(movie)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const movie_routes = (app: Application) => { 
    app.get('/movies', index)
    app.get('/movies/:id', getMovie)
}

export default movie_routes
