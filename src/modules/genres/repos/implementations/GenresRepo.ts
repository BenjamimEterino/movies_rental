import prismaClient from "../../../../prisma";
import { IGenresRepo } from "../IGenreRepo";
import { Genre } from ".prisma/client";

class GenreRepo implements IGenresRepo {
  async findByName(name: string): Promise<Genre> {
    const genre = await prismaClient.genre.findFirst({
      where: { name },
    });

    return genre as Genre;
  }
  async create(name: string): Promise<Genre> {
    const genre = await prismaClient.genre.create({
      data: {
        name,
      },
    });

    return genre;
  }
}

export { GenreRepo };
