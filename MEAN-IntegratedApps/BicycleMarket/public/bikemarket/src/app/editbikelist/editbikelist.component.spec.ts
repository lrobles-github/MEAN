import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbikelistComponent } from './editbikelist.component';

describe('EditbikelistComponent', () => {
  let component: EditbikelistComponent;
  let fixture: ComponentFixture<EditbikelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbikelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbikelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
