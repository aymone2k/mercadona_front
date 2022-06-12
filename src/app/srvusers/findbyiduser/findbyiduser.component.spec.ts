import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyiduserComponent } from './findbyiduser.component';

describe('FindbyiduserComponent', () => {
  let component: FindbyiduserComponent;
  let fixture: ComponentFixture<FindbyiduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyiduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbyiduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
