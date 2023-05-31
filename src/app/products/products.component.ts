// products.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from "./models/game";
import {mockGames} from "./assets/mock-games";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  public displayedColumns: string[] = ['title', 'rating', 'image', 'description', 'like'];
  public gameData: Game[] = mockGames;

  constructor(private http: HttpClient, private router: Router) {}

  likeGame(game: Game) {

  }

  async onGameSelect(game: Game) {
    await this.router.navigate(['/games', game.id]);
  }
}


