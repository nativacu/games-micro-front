import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../services/products.service";
import {Game} from "../models/game";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public gameId: number = -1;
  public product: Game | undefined;
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductsService,
		private router: Router
  ) {}

  ngOnInit(): void {
    this.getGameId();
  }

  getGameId(): void {
    this.route.paramMap.subscribe(params => {
      this.gameId = Number(params.get('id'));
      this.product =  this._productService.getGameById(this.gameId);
    });
  }

	goBackToList() {
		this.router.navigate(['/products']);
	}
}
