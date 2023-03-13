import { Genre } from ".prisma/client";

interface IGenresRepo {
  findByName(name: string): Promise<Genre>;
  create(name: string): Promise<Genre>;
}

export { IGenresRepo };
