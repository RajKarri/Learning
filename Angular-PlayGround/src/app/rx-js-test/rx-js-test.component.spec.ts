import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsTestComponent } from './rx-js-test.component';

describe('RxJsTestComponent', () => {
  let component: RxJsTestComponent;
  let fixture: ComponentFixture<RxJsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
