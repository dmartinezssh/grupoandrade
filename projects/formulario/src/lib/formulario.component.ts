import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatalogsService, EstadoCivil } from '@gpo/core';
import { filter } from 'rxjs';

@Component({
  selector: 'dxn-formulario',
  template: `
    <div class="container">
      <form class="d-flex flex-column" (ngSubmit)="guardar()" [formGroup]="form" >
        <mat-form-field appearance="outline" class="w-100">
            <mat-label>Nombres</mat-label>
            <input matInput placeholder="Nombres" formControlName="nombres">
            <mat-error *ngIf="f['nombres'].hasError('required')">Campo obligatorio</mat-error>
            <mat-error *ngIf="f['nombres'].hasError('pattern')">No puede tener espacios en blanco al final</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-100">
            <mat-label>Apellidos</mat-label>
            <input matInput placeholder="Apellidos" formControlName="apellidos">
            <mat-error *ngIf="f['apellidos'].hasError('required')">Campo obligatorio</mat-error>
            <mat-error *ngIf="f['apellidos'].hasError('pattern')">No puede tener espacios en blanco al final</mat-error>
        </mat-form-field>
        <mat-checkbox class="example-margin" formControlName="fumas">Fumas</mat-checkbox>
        <mat-checkbox class="example-margin" formControlName="actualmentePracticasLectura">Actualmente Practicas Lectura</mat-checkbox>
        <div class="librosLeidos px-3" *ngIf="f['actualmentePracticasLectura'].value">
          <ng-container formArrayName="librosLeidosUltimosTresMeses">
            <div class="lista-libros d-flex flex-column" *ngFor="let libroLeido of librosLeidosUltimosTresMeses.controls; index as i">
              <mat-form-field appearance="outline" class="w-100" [style.fontSize.px]="12">
                <mat-label>Libro {{i + 1}}</mat-label>
                <input matInput [placeholder]="'Libro ' + i" [formControlName]="i">
                <mat-error *ngIf="libroLeido.hasError('required')">Campo obligatorio</mat-error>
              </mat-form-field>
            </div>
          </ng-container>
          <button mat-stroked-button type="button" (click)="agregarLibro()" [style.fontSize.px]="12">Agregar campo</button>
        </div>
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Estado Civil</mat-label>
          <mat-select formControlName="estadoCivil">
            <mat-option *ngFor="let ec of estadoCivil" [value]="ec.id">{{ec.label}}</mat-option>
          </mat-select>
        </mat-form-field>
        <div class="w-100">
            <button type="submit" mat-raised-button color="primary" class="w-100" [disabled]="loading">Enviar</button>
        </div>
        <mat-progress-bar *ngIf="loading" mode="indeterminate" value="25"></mat-progress-bar>
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
  `]
})
export class FormularioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loading: boolean = false;
  estadoCivil: EstadoCivil[] = [];
  constructor(private builder: FormBuilder,
              private service: CatalogsService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      nombres: ['', [Validators.required, Validators.pattern(/^[^\s]+(\s+[^\s]+)*$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[^\s]+(\s+[^\s]+)*$/)]],
      fumas: [false, Validators.required],
      actualmentePracticasLectura: [false, Validators.required],
      librosLeidosUltimosTresMeses: new FormArray([]),
      estadoCivil: [null]
    });

    this.form.controls['actualmentePracticasLectura']
      .valueChanges
      .subscribe(val => val ? this.agregarLibro() : this.librosLeidosUltimosTresMeses.clear())
    
    this.service.obtenerCatalogos()
      .subscribe( data => this.estadoCivil = data)
  }

  get librosLeidosUltimosTresMeses(): FormArray {
    return this.form.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  agregarLibro() {
    this.librosLeidosUltimosTresMeses.push(new FormControl('', Validators.required));
  }

  get f() { return this.form.controls; }

  guardar() {
    if(this.form.valid) {
      this.loading = true
      this.form.disable();
      setTimeout(() => {
        this.loading = false;
        this.openMessage("Registro Exitoso")
        this.form.enable();
        this.form.reset();
      }, 2000)
    }
  }

  openMessage(message: string) {
    this._snackBar.open(message, '', {
        duration: 2000
    });
}

}
