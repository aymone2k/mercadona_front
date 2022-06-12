import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallplacedordersComponent } from './findallplacedorders.component';

describe('FindallplacedordersComponent', () => {
  let component: FindallplacedordersComponent;
  let fixture: ComponentFixture<FindallplacedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallplacedordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallplacedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
