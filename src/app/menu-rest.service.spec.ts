import { TestBed } from '@angular/core/testing';

import { MenuRestService } from './menu-rest.service';

describe('MenuRestService', () => {
  let service: MenuRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
