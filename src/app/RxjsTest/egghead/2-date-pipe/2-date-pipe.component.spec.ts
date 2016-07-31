/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DatePipeComponent } from './2-date-pipe.component';

describe('Component: 2DatePipe', () => {
  it('should create an instance', () => {
    let component = new DatePipeComponent();
    expect(component).toBeTruthy();
  });
});
