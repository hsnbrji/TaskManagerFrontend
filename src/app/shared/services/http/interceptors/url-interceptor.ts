import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../../../environments/environment';


@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  /**
   * create an instance of the class UrlInterceptor
   *
   */
  constructor() { }

  /**
   * Intercepts the url and add the API endpoint before resending the url4
   * to it designated path
   *
   * @param req is a http request
   * @param next is a http handler
   *
   * @returns http event of type observable
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiEndpoint = environment.apiEndpoint;
    const apiReq = req.clone({ url: `${apiEndpoint}${req.url}` });
    return next.handle(apiReq);
  }
}
