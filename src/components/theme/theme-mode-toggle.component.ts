import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-mode-toggle',
  standalone: true,
  template: `
    <button
      class="btn btn-icon"
      (click)="toggleTheme()"
      aria-label="Toggle theme"
    >
      <i class="fas" [class.fa-sun]="isDarkMode" [class.fa-moon]="!isDarkMode"></i>
    </button>
  `,
  styles: []
})
export class ThemeModeToggleComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
} 