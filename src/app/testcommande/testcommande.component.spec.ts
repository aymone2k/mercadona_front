import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcommandeComponent } from './testcommande.component';

describe('TestcommandeComponent', () => {
  let component: TestcommandeComponent;
  let fixture: ComponentFixture<TestcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
