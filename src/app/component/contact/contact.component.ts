import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{
  form = inject(FormBuilder)
  
  http = inject(HttpClient)

  formulario = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.minLength(4), Validators.required]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  })

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://submit-form.com/VDPLCeq9E', this.formulario.value)
        .subscribe(response => {
          console.log('Datos enviados exitosamente');
        }, error => {
          console.error('Error al enviar formulario', error);
        });
    }
  }

}
