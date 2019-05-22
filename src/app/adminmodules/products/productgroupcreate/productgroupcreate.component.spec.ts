import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgroupcreateComponent } from './productgroupcreate.component';

describe('ProductgroupcreateComponent', () => {
  let component: ProductgroupcreateComponent;
  let fixture: ComponentFixture<ProductgroupcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgroupcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgroupcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
