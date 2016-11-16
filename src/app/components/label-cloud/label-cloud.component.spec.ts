/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelCloudComponent } from './label-cloud.component';

describe('LabelCloudComponent', () => {
  let component: LabelCloudComponent;
  let fixture: ComponentFixture<LabelCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
