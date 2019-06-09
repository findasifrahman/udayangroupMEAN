import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthloginComponent } from './oauthlogin.component';

describe('OauthloginComponent', () => {
  let component: OauthloginComponent;
  let fixture: ComponentFixture<OauthloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
