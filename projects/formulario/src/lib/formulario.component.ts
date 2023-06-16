import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'dxn-formulario',
  template: `
    <div class="container">
      <form class="d-flex flex-column" [formGroup]="form" >
        <input type="date" formControlName="fecha">
        <select formControlName="unidad">
          <option value=""></option>
          <option value="days">Días</option>
          <option value="months">Meses</option>
          <option value="years">Años</option>          
        </select>
        <input type="text" formControlName="cantidad">
      </form>
    </div>
    <div *ngIf="form.valid">
      <span>Resultado: </span><span>{{result | date:'dd MMM yyyy'}}</span>
    </div>
  `,
  styles: [`
    .container {
      padding: 1rem;  
    }

    form {
      gap: 1rem;
    }
  `]
})
export class FormularioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  result: Date = new Date;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      fecha: [null, Validators.required],
      unidad: ['', Validators.required],
      cantidad: [null, Validators.required]
    });

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe( ({ fecha, unidad, cantidad }) => {
        this.result = this.calcular(new Date(fecha), unidad, Number(cantidad));
      })
  }

  calcular(fecha: Date, unidad: string, cantidad: number): Date {
    let newDate = fecha;
    switch(unidad) {
      case "days":
        newDate.setDate(fecha.getDate() + cantidad);
        break;
      case "months":
        newDate.setMonth(fecha.getMonth() + cantidad);
        break;
      case "years":
        newDate.setFullYear(fecha.getFullYear() + cantidad);
        break;
    }
    return newDate;
  }

}
