import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleniumIntroComponent } from './selenium-intro.component';

describe('SeleniumIntroComponent', () => {
  let component: SeleniumIntroComponent;
  let fixture: ComponentFixture<SeleniumIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleniumIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleniumIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
