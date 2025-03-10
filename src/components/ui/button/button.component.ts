import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [class]="'btn ' + (variant === 'secondary' ? 'btn-secondary' : 'btn-primary')"
      [class.w-full]="fullWidth"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() fullWidth = false;
} 