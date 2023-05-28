// game.interface.ts
export interface Game {
  id: number;
  title: string;
  rating: string;
  imageUrl: string;
  description: string;
  price: number;
  releaseDate: string;
  publisher: string;
  consoles: string[];
  liked?: boolean;
}
