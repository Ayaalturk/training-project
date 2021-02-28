import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-childfooter',
  templateUrl: './childfooter.component.html',
  styleUrls: ['./childfooter.component.css']
})
export class ChildfooterComponent implements OnInit {
  title:string ="Thank you for browsing";
  @Input()brand!: string;
  @Output() notify = new EventEmitter<number>();
  send () {
    this.notify.emit(1) ;
  }
  constructor() { }

  ngOnInit(): void {
  }
  
   

}
