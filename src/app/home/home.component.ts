import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TheSlider: any[];
  play = 0;
  change_it(){
    // document.querySelectorAll('#slider .continer')[this.play].style.right = 0;
    // console.log(this.play)
    console.log(document.querySelectorAll('#slider .continer')[this.play].style.right);
    // if(this.play == 3){
    //   this.play = 0
    // }else{this.play += 1}
  };
  
  constructor() {
    this.TheSlider = [1,2,3,4,5];
    // setInterval(this.change_it, 100, "my text");
  }

  ngOnInit(): void {
    // setInterval(this.change_it, 1000, "my text");
  }
}
