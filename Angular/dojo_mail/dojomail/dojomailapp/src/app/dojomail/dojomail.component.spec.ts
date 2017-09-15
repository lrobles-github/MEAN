import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojomailComponent } from './dojomail.component';

describe('DojomailComponent', () => {
  let component: DojomailComponent;
  let fixture: ComponentFixture<DojomailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojomailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojomailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
