import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from './model/Mycontact';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  baseUrl:string ="https://dummyjson.com/users"

  constructor(private http:HttpClient) { }
getAlldetails():Observable<any>{
  return this.http.get(this.baseUrl)
}

}
