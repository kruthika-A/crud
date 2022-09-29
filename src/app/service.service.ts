import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }


  getall() {
    return this.http.get(environment.url + '/user')                  //acts as fetch
  }
  addinguser(data: any) {
    return this.http.post(environment.url + '/insert', data)             // acts as fetch
  }
  getId(id: any) {
    return this.http.get(environment.url + '/userId/' + id)
  }
  edituser(userData:any){
    return this.http.put(environment.url+'/update/' + userData.id , userData)
  }
  deletinguser(id:any){

    return this.http.delete(environment.url+'/delete/' +id)

  } 
}