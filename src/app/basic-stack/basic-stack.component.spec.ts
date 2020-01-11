import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStackComponent } from './basic-stack.component';

describe('BasicStackComponent', () => {
  let component: BasicStackComponent;
  let fixture: ComponentFixture<BasicStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
