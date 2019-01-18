import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public charactar: Observable<any>;

  constructor(private data: DataService) { 
    this.charactar = data.charactar
    this.data.getData()
  } 
}
 