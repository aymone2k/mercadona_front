import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepassComponent } from './updatepass.component';

describe('UpdatepassComponent', () => {
  let component: UpdatepassComponent;
  let fixture: ComponentFixture<UpdatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
