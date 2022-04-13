import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2GreetingComponent } from './app2-greeting.component';

describe('App2GreetingComponent', () => {
  let component: App2GreetingComponent;
  let fixture: ComponentFixture<App2GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App2GreetingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App2GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
