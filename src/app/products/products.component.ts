// products.component.ts
import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {}

  likeGame(game: Game) {
			game.liked = !game.liked;
			this.saveLikedGames();
  }

	saveLikedGames() {
		const likedGames = this.gameData.filter(game => game.liked).map(game => game.title);
		localStorage.setItem('likedGames', JSON.stringify(likedGames));
	}
}


