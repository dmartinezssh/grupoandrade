import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    MatInputModule
  ]
})
export class SharedModule { }
