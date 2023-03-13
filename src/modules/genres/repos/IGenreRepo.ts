import { Genre } from ".prisma/client";

interface IGenresRepo {
  list(): Promise<Genre[]>;
  findByName(name: string): Promise<Genre>;
  create(name: string): Promise<Genre>;
}

export { IGenresRepo };
