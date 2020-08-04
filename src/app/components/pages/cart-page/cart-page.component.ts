import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  
  public cartItems: Product[] = [];

  constructor(
    private dataService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {
    this.cartItems = this.dataService.getCartItemsObject();
    console.log(this.cartItems);
  }

  public getTotalPrice(): number {
    return this.cartItems.reduce((acc,{price}) => acc + price,0);
  }
}
