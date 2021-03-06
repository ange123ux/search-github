import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Users } from '../class/users';
import { Repos } from '../class/repos';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private username: string;
  private reponame: string;
  // private show:number
 

  constructor(private http:Http) {
    console.log('service is ready');
    this.username = 'ange123ux';
    this.reponame = 'Quotes';
    // this.show = 10;


   }

   getUsers(){
     return this.http.get('https://api.github.com/users/'+ this.username + "?access_token=" + environment.apiUrl).pipe(map(res => res.json()));
   }

   getRepos(){
    return this.http.get('https://api.github.com/users/'+ this.username + "/repos?order=created&sort=asc?access_token=" + environment.apiUrl).pipe(map(res => res.json()));
  }

  getRepoInfo(){
    return this.http.get('https://api.github.com/users/'+ 'search/repositories?q={' + this.reponame +'&sort=forks&order=asc?' + environment.apiUrl).pipe(map(res => res.json()));
  }

  updateUsers(username:string){
    this.username = username;
  }


  updateRepos(reponame:string){
    this.reponame = reponame;
  }

}
