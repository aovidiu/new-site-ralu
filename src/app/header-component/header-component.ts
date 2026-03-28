import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})

export class HeaderComponent {
  Acasa_menu= "Acasă";
  DespreNoi_menu= "Psihoterapie";
  Cursuri_menu = "Cursuri";
  Contact_menu = "Contact";
  Nume_Cabinet = "Cabinet individual de psihologie";
  Nume1 = "Albu Raluca și ";
  Nume2 = "Ana Maria Bădescu";

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  closeMenuContact() {
    this.closeMenu()
    this.scrollToFooter();
  }

  scrollToFooter(): void {
  document.getElementById('footer')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

}
