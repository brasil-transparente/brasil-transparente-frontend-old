import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isCopiadoClicado: boolean = false;
  pixKey: string = environment.pixKey;
  contactEmail: string = environment.contactEmail;

  copyPixKey(): void {
    navigator.clipboard.writeText(this.pixKey);
    this.isCopiadoClicado = true;

    setTimeout(() => {
      this.isCopiadoClicado = false;
    }, 1500);
  }
}