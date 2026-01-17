import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModal } from './profile-modal/profile-modal';

@Component({
  selector: 'app-header',
  imports: [ProfileModal],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showProfileModal = false;
  isMenuOpen = false;
  isDarkMode = false;

  toggleProfileModal() {
    this.showProfileModal = !this.showProfileModal;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  switchTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false; // Close menu on selection
    }
  }

  private router = inject(Router);

  onLogin() {
    // Navigate to Login page
    this.router.navigate(['/login']);
  }
}
