import { FormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,                // ✅ mark as standalone
  imports: [CommonModule, RouterOutlet], // ✅ include CommonModule
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  studentName: string = "Harshitha K R";
  location: string = "Puducherry";
  college: string = "MVIT";
  Attendance: boolean = true;
  batchno: number = 67;
}
