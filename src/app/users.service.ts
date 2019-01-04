import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../environments/environment";


@Injectable()
export class UsersService {
 
  constructor( private http: HttpClient) { }
  usersGet() {
    
    return this.http.get(environment.apiUrl+"/boysHostel");

};

// userspost(upload) {
    
//   return this.http.post("/",upload);

// };


}

