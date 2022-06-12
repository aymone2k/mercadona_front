import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbypriceascComponent } from './orderbypriceasc.component';

describe('OrderbypriceascComponent', () => {
  let component: OrderbypriceascComponent;
  let fixture: ComponentFixture<OrderbypriceascComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbypriceascComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderbypriceascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
