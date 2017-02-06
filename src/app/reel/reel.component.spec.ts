/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReelComponent } from './reel.component';

describe('ReelComponent', () => {
  let component: ReelComponent;
  let fixture: ComponentFixture<ReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
