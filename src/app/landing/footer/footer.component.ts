import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title:string ="Thank you for browsing";
  Item = 'PUMA';
  counter:number=0;
  getFromChild(event:any){
    this.counter+=event;

  }

  ngOnInit(): void {
  }

}
