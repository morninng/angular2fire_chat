/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ObserveAsyncComponent } from './1-observe-async.component';

describe('Component: 1ObserveAsync', () => {
  it('should create an instance', () => {
    let component = new ObserveAsyncComponent();
    expect(component).toBeTruthy();
  });
});
