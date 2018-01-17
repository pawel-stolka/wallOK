import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;
  private dataHeights = [];

  constructor() { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();
      // change the data periodically
      setInterval(() => this.generateData(), 1500);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    this.dataHeights = [];
    let rowNumber = 3; //(5 + Math.floor(Math.random() * 10));
    for (let i = 0; i < rowNumber; i++) {
      let _dataHeight = Math.floor(Math.random() * 100);
      this.dataHeights.push(_dataHeight)
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    console.log('dataHeights:')
    console.log(this.dataHeights)
  }
}
