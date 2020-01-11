import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLogsComponent } from './simple-logs.component';

describe('SimpleLogsComponent', () => {
  let component: SimpleLogsComponent;
  let fixture: ComponentFixture<SimpleLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
