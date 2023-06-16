import { NgModule } from '@angular/core';
import { CalculaFechaComponent } from './calcula-fecha.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CalculaFechaComponent}
]

@NgModule({
  declarations: [
    CalculaFechaComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    CalculaFechaComponent
  ]
})
export class CalculaFechaModule { }
