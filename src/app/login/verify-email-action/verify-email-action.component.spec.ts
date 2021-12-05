import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailActionComponent } from './verify-email-action.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('VerifyEmailActionComponent', () => {
  let component: VerifyEmailActionComponent;
  let fixture: ComponentFixture<VerifyEmailActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmailActionComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
