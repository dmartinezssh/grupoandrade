import { NgModule } from "@angular/core";
import { VERSIONES_COMPONENT, VersionesRouting } from './versiones.routing';

@NgModule({
  declarations: [
    ...VERSIONES_COMPONENT
  ],
  imports: [
    VersionesRouting
  ]
})

export class ConversionesModule { }
