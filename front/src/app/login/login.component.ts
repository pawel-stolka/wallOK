import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {}
  
    constructor(private apiService: ApiService) {}
    
    post() {
      this.apiService.loginUser(this.loginData)
    }
}
