import { Component, OnInit } from '@angular/core';

declare var $:any;
declare function InitPageWin([]):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      InitPageWin($);
    }, 50);
  }
}
