import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TheSlider: any[];
  constructor() {
    this.TheSlider = [1,2,3,4,5];
    
  }

  ngOnInit(): void {
    
  }

}