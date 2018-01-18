import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private chartData: Array<any>;
  title = 'app';
  // private users: Array<any>;

  // public _apiService: ApiService

  constructor(private apiService: ApiService) {
    // this._apiService = apiService
   }

  ngOnInit() {
       
    // // give everything a chance to get loaded before starting the animation to reduce choppiness
    // setTimeout(() => {
    //   this.generateData();
      
    //   // change the data periodically
    //   setInterval(() => this.generateData(), 1500);
    // }, 1000);
  }

  // generateData() {
  //   this.chartData = [];
  //   this.apiService.getUsers();
  //   this.users = this.apiService.users;
  //   let rowNumber = this.users.length; //(5 + Math.floor(Math.random() * 10));
  //   for (let i = 0; i < rowNumber; i++) {
  //     let currUser = this.users[i],
  //         name = ``
  //     if(currUser.name != undefined) {
  //       name = ` (${currUser.name})`
  //     }
  //     this.chartData.push([
  //       `${i+1}. ${currUser.email}${name}`,
  //       Math.floor(Math.random() * 100)
  //     ]);
  //   }
  // }
}
