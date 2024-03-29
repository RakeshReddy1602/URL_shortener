import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativesComponent } from './alternatives.component';

describe('AlternativesComponent', () => {
  let component: AlternativesComponent;
  let fixture: ComponentFixture<AlternativesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlternativesComponent]
    });
    fixture = TestBed.createComponent(AlternativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
