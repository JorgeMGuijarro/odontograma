import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public title:string = 'ODONTOGRAMA';
  public username:string = 'Miguel Robles González';
  constructor() { }

  ngOnInit(): void {
  }

}
