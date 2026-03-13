import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  Acasa_menu= "Acasa";
  DespreNoi_menu= "Despre noi";
  Cursuri_menu = "Cursuri";
  Contact_menu = "Contact";
  Nume_Cabinet = "Cabinet individual de psihologie";
  Nume1 = "Albu Raluca";
  Nume2 = "și"
  Nume3 = "Ana Maria Badescu";

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
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    this.scrollToFooter();
  }

  scrollToFooter(): void {
  document.getElementById('footer')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

}
