import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    SharedComponent,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
