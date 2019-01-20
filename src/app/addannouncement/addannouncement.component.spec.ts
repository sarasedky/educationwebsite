import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannouncementComponent } from './addannouncement.component';

describe('AddannouncementComponent', () => {
  let component: AddannouncementComponent;
  let fixture: ComponentFixture<AddannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddannouncementComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
