import { NgModule } from '@angular/core';
import { CalculaFechaComponent } from './calcula-fecha.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@gpo/shared';

const routes: Routes = [
  { path: '', component: CalculaFechaComponent}
]

@NgModule({
  declarations: [
    CalculaFechaComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    CalculaFechaComponent
  ]
})
export class CalculaFechaModule { }
