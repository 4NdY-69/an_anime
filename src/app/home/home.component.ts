import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TheSlider: {};
  constructor() {
    this.TheSlider = {one: 'green', 2: 'blue', 3: 'red', 4: 'white', 5: 'black'};
  }

  ngOnInit(): void {
  }

}
