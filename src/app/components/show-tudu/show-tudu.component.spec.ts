import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTuduComponent } from './show-tudu.component';

describe('ShowTuduComponent', () => {
  let component: ShowTuduComponent;
  let fixture: ComponentFixture<ShowTuduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTuduComponent]
    });
    fixture = TestBed.createComponent(ShowTuduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
