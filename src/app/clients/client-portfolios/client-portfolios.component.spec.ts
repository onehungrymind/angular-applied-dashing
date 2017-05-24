import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Client } from '../../common/models/client.model';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientPortfoliosComponent } from './client-portfolios.component';

describe('ClientPortfoliosComponent', () => {
  let component: ClientPortfoliosComponent;
  let fixture: ComponentFixture<ClientPortfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, BrowserAnimationsModule, FormsModule ],
      declarations: [ ClientPortfoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
