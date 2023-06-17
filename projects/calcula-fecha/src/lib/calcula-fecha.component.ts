import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'dxn-calculaFecha',
  template: `
    <div class="container">
      <form class="d-flex flex-column" [formGroup]="form" >
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Seleccione una fecha</mat-label>
          <input type="date" matInput placeholder="Nombres" formControlName="fecha">
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Unidad</mat-label>
          <mat-select formControlName="unidad">
            <mat-option value="days">Días</mat-option>
            <mat-option value="months">Meses</mat-option>
            <mat-option value="years">Años</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Cantidad</mat-label>
          <input type="number" matInput placeholder="Cantidad" formControlName="cantidad">
        </mat-form-field>
        <span *ngIf="form.valid" class="fs-4 text-center">{{result | date:'dd MMM yyyy'}}</span>
      </form>
    </div>
  `,
  styles: [`
    .container {
      padding: 1rem;  
      width: 400px; 
    }

    form {
      gap: 1rem;
    }

    form span {
      font-family: 'Press Start 2P', cursive;
    }
  `]
})
export class CalculaFechaComponent implements OnInit {

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
        let date = fecha.split('-')
        this.result = this.calcular(new Date(date[0], Number(date[1]) -1, date[2]), unidad, Number(cantidad));
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
