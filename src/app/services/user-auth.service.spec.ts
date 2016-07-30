/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserAuthService } from './user-auth.service';

describe('Service: UserAuth', () => {
  beforeEach(() => {
    addProviders([UserAuthService]);
  });

  it('should ...',
    inject([UserAuthService],
      (service: UserAuthService) => {
        expect(service).toBeTruthy();
      }));
});
