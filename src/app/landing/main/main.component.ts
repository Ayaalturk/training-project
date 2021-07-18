import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  price="100$";
  imagepath1:string ="assets/img/shoe-6.png";
  imagepath2:string ="assets/img/shoe-4.png";
  imagepath3:string ="assets/img/shoe-1.png";
  active = false;
  brandList=[
    {name :"Nike"  , code :" 6789 "},
    {name :"Adidas", code :" 9300 "},
    {name :"reebok", code :" 26789 "},
    {name :"Puma"  , code :" 7497 "},
  ]
  constructor() { }

  ngOnInit(): void {}
  
  getprice(){
    return this.price;
   }
  getMessageString(){
    alert("WELCOME");
   }
  not(){
     this.active=!this.active;
   }
}
