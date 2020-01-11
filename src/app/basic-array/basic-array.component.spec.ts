import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicArrayComponent } from './basic-array.component';

describe('BasicArrayComponent', () => {
  let component: BasicArrayComponent;
  let fixture: ComponentFixture<BasicArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
