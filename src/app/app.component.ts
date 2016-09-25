import { Component, OnInit } from '@angular/core';

import { RESUME } from './shared/data';

@Component({
  selector: 'rsm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = RESUME;

  constructor() {}

  ngOnInit() {
    let particlesJS = window['particlesJS'];
    particlesJS.load('particles-js', 'assets/particles.json');
  }
}
