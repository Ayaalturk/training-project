import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title="Amazing shoes at an amazing price";
     
  constructor() { }

  ngOnInit(): void { }
  
  getMessageString(){
    alert("WELCOME");
  }
}
