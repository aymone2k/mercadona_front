import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbystringinsideComponent } from './findbystringinside.component';

describe('FindbystringinsideComponent', () => {
  let component: FindbystringinsideComponent;
  let fixture: ComponentFixture<FindbystringinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbystringinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbystringinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
