import {Component, Input, input, signal} from '@angular/core';

@Component({
  selector: 'app-annonce',
  imports: [],
  templateUrl: './annonce.html',
  styleUrl: './annonce.css'
})
export class Annonce {


  @Input() depart!: any;
  @Input() arrivee!: any;
}
