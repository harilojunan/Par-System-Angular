import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMyParComponent } from './score-my-par.component';

describe('ScoreMyParComponent', () => {
  let component: ScoreMyParComponent;
  let fixture: ComponentFixture<ScoreMyParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreMyParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreMyParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
