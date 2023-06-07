// products.component.ts
import { Component, OnInit, VERSION } from '@angular/core';
import {Game} from "./models/game";
import {mockGames} from "./assets/mock-games";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	public ngVersion = VERSION.full;
	public displayedColumns: string[] = ['title', 'rating', 'image', 'description', 'like'];
	public gameData: Game[] = mockGames;

	constructor(private router: Router) {}
	ngOnInit() {
		this.updateLikedGamesFromStorage();
	}

	getLikedGames(): string[] {
		const likedGames = localStorage.getItem('likedGames');
		return JSON.parse(likedGames || '[]');
	}

	updateLikedGamesFromStorage() {
		const likedGames = this.getLikedGames();
		this.gameData.forEach(game => {
			const isLiked = likedGames.findIndex((likedGame: string) => likedGame === game.title);
			game.liked = isLiked > -1;
		});
	}

	likeGame(game: Game) {
		game.liked = !game.liked;
		this.saveLikedGames();
	}

	saveLikedGames() {
		const likedGames = this.gameData.filter(game => game.liked).map(game => game.title);
		localStorage.setItem('likedGames', JSON.stringify(likedGames));
	}
}


