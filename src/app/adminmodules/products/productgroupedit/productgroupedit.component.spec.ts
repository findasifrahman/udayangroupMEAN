import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgroupeditComponent } from './productgroupedit.component';

describe('ProductgroupeditComponent', () => {
  let component: ProductgroupeditComponent;
  let fixture: ComponentFixture<ProductgroupeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgroupeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgroupeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
