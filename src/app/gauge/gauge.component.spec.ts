/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GaugeComponent } from './gauge.component';

describe('Component: Gauge', () => {
  it('should create an instance', () => {
    let component = new GaugeComponent();
    expect(component).toBeTruthy();
    expect(component.min).toBe(0);
  });

  it('should calculate the percentage to fill', () => {
    let component = new GaugeComponent();
    expect(component.percentage).toBe('0.0%');

    component.max = 100;
    component.value = 60;
    expect(component.percentage).toBe('60.0%');

    component.value = 40.45;
    expect(component.percentage).toBe('40.5%');
  });
});
