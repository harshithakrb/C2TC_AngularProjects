import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // if you're using standalone components
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isVisible = true;
  isSuccess = true;
  selectedColor = '';

  fruits = ['Apple', 'Banana', 'Orange'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
  }
}
