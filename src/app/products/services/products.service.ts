import { Injectable } from '@angular/core';
import {Game} from "../models/game";
import {mockGames} from "../assets/mock-games";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Function to get all games from mockGames array
  public getGames(): Game[] {
    return mockGames;
  }

  // Function to get a game by id from mockGames array
  public getGameById(id: number): Game | undefined {
    return mockGames.find(game => game.id === id);
  }
}
