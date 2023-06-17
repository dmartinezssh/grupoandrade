import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@gpo/shared';
import { CoreModule } from '@gpo/core';

const routes: Routes = [
  { path: '', component: FormularioComponent}
]

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
