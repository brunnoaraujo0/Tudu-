import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuduItemComponent } from './tudu-item.component';

describe('TuduItemComponent', () => {
  let component: TuduItemComponent;
  let fixture: ComponentFixture<TuduItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuduItemComponent]
    });
    fixture = TestBed.createComponent(TuduItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
