import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductbycategoryComponent } from './view-productbycategory.component';

describe('ViewProductbycategoryComponent', () => {
  let component: ViewProductbycategoryComponent;
  let fixture: ComponentFixture<ViewProductbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
