import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../shared/sidebar/sidebar/sidebar';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [Sidebar, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  darkMode = false;
  notifications = true;
}