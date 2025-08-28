import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isCopiadoClicado: boolean = false;

  copyPixKey(): void {
    this.isCopiadoClicado = true;

    setTimeout(() => {
      this.isCopiadoClicado = false;
    }, 1500);
  }
}