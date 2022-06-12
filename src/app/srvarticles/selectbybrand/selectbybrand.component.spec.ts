import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbybrandComponent } from './selectbybrand.component';

describe('SelectbybrandComponent', () => {
  let component: SelectbybrandComponent;
  let fixture: ComponentFixture<SelectbybrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectbybrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectbybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
