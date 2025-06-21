import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
