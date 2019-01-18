import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private state: any = {
    charactar: new BehaviorSubject(null) 
  }
  constructor() { }

  public getData(): void {
    
    ajax.get('https://swapi.co/api/people/1/')
      .pipe(
        map((user) => user.response)
      ).subscribe((response) => {
        this.state.charactar.next(response); 
      });
  }
  
  public get charactar(): Observable<any>{
    return this.state.charactar;
  }
}
