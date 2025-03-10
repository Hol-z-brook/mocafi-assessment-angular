import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/ui/button/button.component';
import { ThemeModeToggleComponent } from '../../../components/theme/theme-mode-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ThemeModeToggleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {}
