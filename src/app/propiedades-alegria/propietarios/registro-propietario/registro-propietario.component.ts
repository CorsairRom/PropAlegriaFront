import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UbicacionFormComponent } from '../../ubicaciones/ubicacion-form/ubicacion-form.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { PropietarioService } from '../../core/services/propietario.service';

@Component({
  selector: 'app-registro-propietario',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    UbicacionFormComponent, 
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    KeyFilterModule
  ],
  templateUrl: './registro-propietario.component.html',
  styleUrls: ['./registro-propietario.component.scss']
})
export class RegistroPropietarioComponent {

  fb = inject(FormBuilder)
  propietarioService = inject(PropietarioService)

  form = this.fb.group({
    rut_prop: this.fb.nonNullable.control<string>('',
      [
        Validators.required,
        Validators.pattern(/^(\d{1,2}(?:\.\d{1,3}){2}-[\dkK])$/),
      ],
    ),
    pri_nom_prop: this.fb.nonNullable.control<string>('', [Validators.required]),
    seg_nom_prop: this.fb.control<string>('', []),
    pri_ape_prop: this.fb.nonNullable.control<string>('', [Validators.required]),
    seg_ape_prop: this.fb.control<string>('', []),
    direccion_prop: this.fb.nonNullable.control<string>('', [Validators.required]),
    email_prop: this.fb.control<string>('', [Validators.required, Validators.email]),
    contacto_prop: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ],),
    comuna_id: this.fb.control<number | null>(null, [Validators.required]),
  })

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }


  guardar() {
    if(this.form.invalid) return;

    
  }


  cancelar() {}

}
