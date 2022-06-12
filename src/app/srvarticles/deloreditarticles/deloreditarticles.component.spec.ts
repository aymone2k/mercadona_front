import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeloreditarticlesComponent } from './deloreditarticles.component';

describe('DeloreditarticlesComponent', () => {
  let component: DeloreditarticlesComponent;
  let fixture: ComponentFixture<DeloreditarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeloreditarticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeloreditarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
