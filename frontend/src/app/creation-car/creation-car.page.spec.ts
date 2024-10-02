import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationCarPage } from './creation-car.page';

describe('CreationCarPage', () => {
  let component: CreationCarPage;
  let fixture: ComponentFixture<CreationCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
