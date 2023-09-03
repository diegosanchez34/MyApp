import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpolacionPage } from './interpolacion.page';

describe('InterpolacionPage', () => {
  let component: InterpolacionPage;
  let fixture: ComponentFixture<InterpolacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterpolacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
