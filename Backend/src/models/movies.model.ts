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
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
}
