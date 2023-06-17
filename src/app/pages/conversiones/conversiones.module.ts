import { NgModule } from "@angular/core";
import { VERSIONES_COMPONENT, VersionesRouting } from './versiones.routing';
import { CoreModule } from "@gpo/core";

@NgModule({
  declarations: [
    ...VERSIONES_COMPONENT
  ],
  imports: [
    VersionesRouting,
    CoreModule
  ]
})

export class ConversionesModule { }
