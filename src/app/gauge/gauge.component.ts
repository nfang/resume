import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition } from '@angular/core';

@Component({
  selector: 'rsm-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  @Input() color: string = '#c1328e';
  @Input() min: number = 0;
  @Input() max: number;
  @Input() value: number;

  get percentage(): string {
    if (!this.max) {
      return '0';
    }
    return ((this.value / this.max) * 100).toPrecision(3) + '%';
  }

  constructor() { }

  ngOnInit() {
  }

}
