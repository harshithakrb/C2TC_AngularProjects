import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { EmployeeDesignationPipe } from './employee-designation.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, EmployeeDesignationPipe] // ✅ Import standalone component & pipe
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have employees defined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.employees.length).toBeGreaterThan(0); // ✅ checks employee array
  });

  it('should render "Employee Details" in h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Employee Details');
  });

  it('should apply EmployeeDesignationPipe correctly', () => {
    const pipe = new EmployeeDesignationPipe();
    const emp = { eno: 1, ename: 'John Doe', designation: 'developer' };
    expect(pipe.transform(emp)).toBe('John Doe (Senior DEVELOPER)');
  });
});
