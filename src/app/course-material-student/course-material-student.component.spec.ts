import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMaterialStudentComponent } from './course-material-student.component';

describe('CourseMaterialStudentComponent', () => {
  let component: CourseMaterialStudentComponent;
  let fixture: ComponentFixture<CourseMaterialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMaterialStudentComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMaterialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
