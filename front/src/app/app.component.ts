import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chartData: Array<any>;
  title = 'app';
  private users: Array<any>;

  constructor(private apiService: ApiService) { }

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
    this.apiService.getUsers();
    this.users = this.apiService.users;
    console.log(this.users)
    // this.dataHeights = [];
    let rowNumber = this.users.length; //(5 + Math.floor(Math.random() * 10));
    for (let i = 0; i < rowNumber; i++) {
      // let _dataHeight = Math.floor(Math.random() * 100);
      // this.dataHeights.push(_dataHeight)
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    // console.log('dataHeights:')
    // console.log(this.dataHeights)
  }
}
