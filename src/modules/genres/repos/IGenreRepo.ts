import { Genre } from ".prisma/client";

interface IGenresRepo {
  findById(id: string): Promise<Genre>;
  list(): Promise<Genre[]>;
  findByName(name: string): Promise<Genre>;
  create(name: string): Promise<Genre>;
}

export { IGenresRepo };
