import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar/sidebar';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  username: string | null = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: string | null) => this.username = user);
  }
}