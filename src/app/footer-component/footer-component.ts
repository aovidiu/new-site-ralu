import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-component',
   imports: [RouterModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  Trimit_mesaj = "Contactează-ne";
  EmailRaluca = "raluca.albu@yahoo.com";
  EmailAna = "anabdsc@gmail.com";
  FacebookRaluca = 'https://www.facebook.com/profile.php?id=61576439993379';
  TelefonRaluca = "0745 087 428";
  TelefonAna = "0744 422 011";
}
