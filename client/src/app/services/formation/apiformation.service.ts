import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ApiformationService {

  public API = '//localhost:8080';
  public FORMATION_API = this.API + '/formations';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get(this.API+'/all-formations');
  }
  get(id: string) {
    return this.http.get(this.FORMATION_API + '/' + id);
    
  }

  save(foramtion: any): Observable<any> {
    let result: Observable<Object>;
    if (foramtion.href) {
      result = this.http.put(foramtion.href, foramtion);
    } else {
      result = this.http.post(this.FORMATION_API, foramtion);
    }
    return result;
  }
  remove(href: string) {
    return this.http.delete(href);
  }

}
