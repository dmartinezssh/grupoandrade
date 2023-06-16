import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CambioLetrasPipe } from './pipes/cambioLetras.pipe';



@NgModule({
  declarations: [
    CoreComponent,
    CambioLetrasPipe
  ],
  imports: [
  ],
  exports: [
    CoreComponent,
    CambioLetrasPipe
  ]
})
export class CoreModule { }
