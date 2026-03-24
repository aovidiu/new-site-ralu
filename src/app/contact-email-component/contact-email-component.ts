import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-email-component',
  imports: [ CommonModule, FormsModule],
  templateUrl: './contact-email-component.html',
  styleUrl: './contact-email-component.css',
})
export class ContactEmailComponent {

  @ViewChild('contactForm') contactForm!: NgForm;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  successMessage: string = '';
  errorMessage: string = '';
  sending: boolean = false;
  mesajTrimis: string = 'Mesaj trimis!';

  ngAfterViewInit() {
    this.contactForm.valueChanges?.subscribe(() => {
      if(this.successMessage) {
        this.successMessage = '';
      }
      if(this.errorMessage) {
        this.errorMessage = '';
      }
    });
  }

  sendEmail(form: NgForm) {
    if (form.invalid) return;

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const url = 'https://formspree.io/f/xreagzzg';
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    

    this.http.post(url, form.value, { headers }).subscribe({
      next: () => {
        form.resetForm();

        this.successMessage = this.mesajTrimis;
        this.errorMessage = '';        
        this.sending = false;       
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        var serverError: string = err.error.error;
        if(serverError.toLowerCase().includes("validation")) {
          serverError = "Adresa email invalida";
        } else {
          serverError = '';
        }
        this.errorMessage = 'Eroare:  ' +  serverError;
        this.successMessage = '';
        this.sending = false;
        this.cdr.detectChanges(); 
      }
    });
  }
}
