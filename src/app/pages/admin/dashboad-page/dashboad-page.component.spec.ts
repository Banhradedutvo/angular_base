import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadPageComponent } from './dashboad-page.component';

describe('DashboadPageComponent', () => {
  let component: DashboadPageComponent;
  let fixture: ComponentFixture<DashboadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboadPageComponent]
    });
    fixture = TestBed.createComponent(DashboadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
