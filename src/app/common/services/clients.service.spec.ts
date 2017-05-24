import { TestBed, inject } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { Http, HttpModule } from '@angular/http';

describe('ClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([ClientsService], (service: ClientsService) => {
    expect(service).toBeTruthy();
  }));
});