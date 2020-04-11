import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptTestComponent } from './type-script-test.component';

describe('TypeScriptTestComponent', () => {
  let component: TypeScriptTestComponent;
  let fixture: ComponentFixture<TypeScriptTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeScriptTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScriptTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
