import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService {
  messages = []
  users = []
  path = environment.path

  TOKEN_KEY = 'token'
  
  constructor(private http: Http,
              private httpClient: HttpClient) {}

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get isAuthenticated() {
    // double denial/ negative => if exists => true/false
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout() {
    console.log("logged out!")
    localStorage.removeItem(this.TOKEN_KEY)
  }

  getMessages(userId) {
    this.httpClient.get<any>(this.path + '/posts/' + userId)
      .subscribe(res => {
        this.messages = res
        console.log(res)
      })
  }

  postMessages(message) {
    this.httpClient.post(this.path + '/post', message)
    .subscribe(res => {
        console.log(res)
    })
  }

  getUsers() {
    this.httpClient.get<any>(this.path + '/users')
    .subscribe(res => {
        this.users = res
    })
  }

  getProfile(id) {
    return this.httpClient.get(this.path + '/profile/' + id)
  }

  // httpClient !!!!
  registerUser(registerData) {
    this.httpClient.post<any>(this.path + '/register', registerData)
    .subscribe(res => {
      this.saveToken(res.token)
      console.log("registered.")
    })
  }

  loginUser(loginData) {
    this.httpClient.post<any>(this.path +'/login', loginData)
    .subscribe(res => {
      this.saveToken(res.token)
      console.log("logged in.")
    })
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }
}
