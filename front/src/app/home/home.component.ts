import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private chartData: Array<any>;
  private users: Array<any>;

  private intervalTime: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.intervalTime = 750;
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();
      
      // change the data periodically
      setInterval(() => this.generateData(), this.intervalTime);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    this.apiService.getUsers();
    this.users = this.apiService.users;
    let rowNumber = this.users.length; //(5 + Math.floor(Math.random() * 10));
    for (let i = 0; i < rowNumber; i++) {
      let currUser = this.users[i],
          name = ``
      if(currUser.name != undefined) {
        name = ` (${currUser.name})`
      }
      this.chartData.push([
        `${i+1}. ${currUser.email}${name}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}
