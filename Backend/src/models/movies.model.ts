import { Schema, model } from "mongoose";

export type Movie = {
  id?: number;
  collectionId: number;
  name: string;
  image: string;
}

const movieSchema = new Schema({
  collectionId: {
    type: String,
    required: true,
  },
  cardImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  titleImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  }
})

const movie = model("Movie", movieSchema)

export class MovieStore {
  async index(): Promise<Movie[]> {
    try {
      const result = await movie.find({})
      return result;
    } catch (err) {
      throw new Error(`unable get Movies: ${err}`);
    }
  }
  
  async show(id: string): Promise<Movie> {
    try {
      const result = await movie.findById(id);
      return result;
    } catch (err) {
        throw new Error(`Cannot find Movie ${id}. Error: ${err}`)
    }
  }
}
