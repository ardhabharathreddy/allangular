import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x='';
  y='';
  c=NaN;
  height='';
  width='';
  areaAnswer=NaN;
  perimeterAnswer=NaN;
  regesteredname:string[]=[];
  regestername="";
  
  add(){
   this.c=(parseInt(this.x)+parseInt(this.y));
  }
  sub(){
    alert(parseInt(this.x)-parseInt(this.y));
  }
  mul(){
    alert(parseInt(this.x)*parseInt(this.y));
  }
  div(){
    alert(parseInt(this.x)/parseInt(this.y));
  }
  area()
  {
    this.areaAnswer=parseInt(this.height)*parseInt(this.width);
    this.perimeterAnswer=NaN;
  }
  perimeter()
  {
    this.perimeterAnswer=2*(parseInt(this.height)+parseInt(this.width));
    this.areaAnswer=NaN;
  }
  regester()
  {
    this.regesteredname.push(this.regestername);
  }
  product="";
  quantity=NaN;
  price=NaN;
  cartItems:any=[];
  addToCart(){
    var cartItem:any={};
    cartItem.productItem=this.product;
    cartItem.quantityInNumber=this.quantity;
    cartItem.priceOfProduct=this.price;
    this.cartItems.push(cartItem);
  }
}
