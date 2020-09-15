import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

/** Error when invalid control is dirty, touched, or submitted. */
@Component({
  selector: '[custom-error]',
  template: `
    <div [@animation]="increment" *ngIf="message" style="margin-top:-1rem;font-size:.75rem">
      <mat-error>
        {{ message }}
      </mat-error>
    </div>
  `,
  animations: [
    trigger('animation', [
      transition(':increment', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1rem)' }),
        animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-1rem)' })),
      ]),
    ]),
  ],
})
export class MatErrorComponent {
  message: string;
  increment: number = 0;

  @Input()
  set error(value) {
    if (value) {
      if (this.message != value) this.increment++;
    }
    this.message = value;
  }
}
