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

  private comparePeriod(a: { from: Date, to: Date }, b: { from: Date, to: Date }): number {
    if (!a.to || !b.to) {
      return b.from.getTime() - a.from.getTime();
    }
    return b.to.getTime() - a.to.getTime();
  }

  get experience() {
    return RESUME.experience.sort((a, b) => this.comparePeriod(a.period, b.period));
  }

  get education() {
    return RESUME.education.sort((a, b) => this.comparePeriod(a.period, b.period));
  }
}
