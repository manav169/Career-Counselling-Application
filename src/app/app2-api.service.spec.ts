import { TestBed } from '@angular/core/testing';

import { App2ApiService } from './app2-api.service';

describe('App2ApiService', () => {
  let service: App2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
