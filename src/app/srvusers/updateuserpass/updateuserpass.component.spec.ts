import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserpassComponent } from './updateuserpass.component';

describe('UpdateuserpassComponent', () => {
  let component: UpdateuserpassComponent;
  let fixture: ComponentFixture<UpdateuserpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateuserpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
