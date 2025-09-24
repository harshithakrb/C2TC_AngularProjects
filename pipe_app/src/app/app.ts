import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { EmployeeDesignationPipe } from './employee-designation.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    EmployeeDesignationPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // ✅ should be styleUrls, not styleUrl
})
export class AppComponent {
  currentDate: Date = new Date();
  amount: number = 1234.567;
  price: number = 99.99;

  employees = [
    { eno: 1, ename: 'John Doe', designation: 'developer' },
    { eno: 2, ename: 'Jane Smith', designation: 'designer' },
    { eno: 3, ename: 'Michael Johnson', designation: 'manager' }
  ];
}
