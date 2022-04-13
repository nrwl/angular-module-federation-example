import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1GreetingComponent } from './app1-greeting.component';

describe('App1GreetingComponent', () => {
  let component: App1GreetingComponent;
  let fixture: ComponentFixture<App1GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App1GreetingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
