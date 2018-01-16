import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {}
  
  constructor(private apiService: ApiService) {}
  post() {
    console.log(this.registerData)
    this.apiService.registerUser(this.registerData)
  }
}
