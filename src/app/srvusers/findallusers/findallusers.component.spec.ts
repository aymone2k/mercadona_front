import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallusersComponent } from './findallusers.component';

describe('FindallusersComponent', () => {
  let component: FindallusersComponent;
  let fixture: ComponentFixture<FindallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
