import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-email-component',
  imports: [FormsModule, RouterModule],
  templateUrl: './contact-email-component.html',
  styleUrl: './contact-email-component.css',
})
export class ContactEmailComponent {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private meta = inject(Meta);
  private title = inject(Title);

  @ViewChild('contactForm') contactForm!: NgForm;

  successMessage: string = '';
  errorMessage: string = '';
  sending: boolean = false;
  mesajTrimis: string = 'Mesaj trimis!';
  formTitle: string = 'Formular Contact';

  ngOnInit() {
    this.title.setTitle('Contact - Cabinet Psihologie București');
    this.meta.updateTag({ name: 'description', content: 'Contactați cabinetul de psihologie din București pentru programări și consultații. Suntem aici să vă ajutăm să depășiți dificultățile emoționale și să vă îmbunătățiți calitatea vieții.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact cabinet psihologie București, programare terapie București, consultație psihologică București, ajutor emoțional București, cabinet psihologie București' });
  }

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

    const url = 'https://contact-worker.message-contact.workers.dev/contact';
    //const url = 'http://127.0.0.1:8787/contact';
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
