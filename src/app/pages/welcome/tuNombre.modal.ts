import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
    selector: 'dxn-tu-nombre',
    template: `
        <form (ngSubmit)="onNoClick()" [formGroup]="form" >
            <mat-form-field appearance="outline" class="w-100">
                <mat-label>Tu nombre</mat-label>
                <input matInput placeholder="Tu nombre" formControlName="name">
            </mat-form-field>
        </form>
    `,
    styles: [`
    `]
})

export class TuNombreModal {
    yourName: string = '';
    form: FormGroup = new FormGroup({});

    constructor(public dialogRef: MatDialogRef<TuNombreModal>,
                @Inject(MAT_DIALOG_DATA) public data: string,
                private builder: FormBuilder) {
                    this.form = this.builder.group({
                        name: [data]
                    })
                }

    onNoClick(): void {
        this.dialogRef.close(this.form.controls['name'].value);
    }

}