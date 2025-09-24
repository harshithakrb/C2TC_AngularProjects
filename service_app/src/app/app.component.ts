import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Added CommonModule + FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  title='service_app';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
