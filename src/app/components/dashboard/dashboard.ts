import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar/sidebar';
import { ItemList } from '../item-list/item-list';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, ItemList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  username: string | null = '';

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((user: string | null) => this.username = user);
  }
}