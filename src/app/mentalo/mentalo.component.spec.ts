import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentaloComponent } from './mentalo.component';

describe('MentaloComponent', () => {
  let component: MentaloComponent;
  let fixture: ComponentFixture<MentaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
