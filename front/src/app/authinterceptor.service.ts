import { HttpInterceptor } from '@angular/common/http'
import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
  //   throw new Error("Method not implemented.");
  // }
  intercept(req, next){
    var auth = this.injector.get(ApiService)
    var authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token ' + auth.token)
    })
    return next.handle(authRequest)
  }
}
