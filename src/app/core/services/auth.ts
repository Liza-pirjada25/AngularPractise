import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInUser = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  currentUser$ = this.loggedInUser.asObservable();

  login(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem('username', username);
      this.loggedInUser.next(username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
    this.loggedInUser.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.loggedInUser.value;
  }
}