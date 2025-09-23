import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App Component (Directive Demo)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle visibility', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app.isVisible).toBeTrue();
    app.toggleVisibility();
    expect(app.isVisible).toBeFalse();
  });

  it('should toggle success state', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.isSuccess = true;
    app.toggleSuccess();
    expect(app.isSuccess).toBeFalse();

    app.toggleSuccess();
    expect(app.isSuccess).toBeTrue();
  });

  it('should render fruits list', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const items = compiled.querySelectorAll('li');
    expect(items.length).toBeGreaterThan(0);  // ensures *ngFor is working
  });

  it('should switch based on selectedColor', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.selectedColor = 'red';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('You selected Red!');
  });
});
