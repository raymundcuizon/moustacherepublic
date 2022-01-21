import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moustacherepublic';

  public count: number = 0;
  public prodCount: any = {
    s: 0,
    m: 0,
    l: 0
  }
  public showCart: boolean = false;
  public selectedSize: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  showProd() :void {
    this.showCart = !this.showCart;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  addToCart(): void{
    this.count++;
    switch (this.selectedSize) {
      case 'S':
        this.prodCount.s++;
        break;
    
      case 'M':
        this.prodCount.m++;
         break;
      case 'L':
          this.prodCount.l++;
           break;
      default:
        break;
    }
  }
}
