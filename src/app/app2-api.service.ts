import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class App2ApiService {

  constructor(private http:HttpClient) { }
  
  api1(url,data)
  {
    return this.http.post(url,data);
    
  }
}



