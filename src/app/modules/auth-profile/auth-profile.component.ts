import { Component, OnInit } from '@angular/core';

declare var $:any;
declare function InitPageWin([]):any;
@Component({
  selector: 'app-auth-profile',
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.css'
})
export class AuthProfileComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      InitPageWin($);
    }, 50);
  }

}
