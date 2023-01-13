import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Sending The Token In Headers by Interceptors
    const myToken = this.auth.getToken();
       request=request.clone({
        setHeaders:{Authorization:`Bearer ${myToken}`}
       })
    return next.handle(request);
  }
}
