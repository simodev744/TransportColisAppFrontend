import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BehaviorSubject, map, Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `


  <router-outlet></router-outlet>`
})
export class App {

  constructor(private http:HttpClient) {
  }


}
