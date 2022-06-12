import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallarticlesComponent } from './findallarticles.component';

describe('FindallarticlesComponent', () => {
  let component: FindallarticlesComponent;
  let fixture: ComponentFixture<FindallarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindallarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindallarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
