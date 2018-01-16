import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private apiService: ApiService) { }
  postMsg=''
  
    post() {
      this.apiService.postMessages({msg: this.postMsg})
    }
}
