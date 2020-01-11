import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQueueComponent } from './basic-queue.component';

describe('BasicQueueComponent', () => {
  let component: BasicQueueComponent;
  let fixture: ComponentFixture<BasicQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
