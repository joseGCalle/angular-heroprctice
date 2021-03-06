import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/dist/types';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

}