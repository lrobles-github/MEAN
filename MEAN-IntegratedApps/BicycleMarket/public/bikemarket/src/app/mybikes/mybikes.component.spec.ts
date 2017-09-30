import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybikesComponent } from './mybikes.component';

describe('MybikesComponent', () => {
  let component: MybikesComponent;
  let fixture: ComponentFixture<MybikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
