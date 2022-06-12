import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbypricedescComponent } from './orderbypricedesc.component';

describe('OrderbypricedescComponent', () => {
  let component: OrderbypricedescComponent;
  let fixture: ComponentFixture<OrderbypricedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbypricedescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderbypricedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
