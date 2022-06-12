import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyidarticleComponent } from './findbyidarticle.component';

describe('FindbyidarticleComponent', () => {
  let component: FindbyidarticleComponent;
  let fixture: ComponentFixture<FindbyidarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyidarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbyidarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
