import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CambioLetrasPipe } from './pipes/cambioLetras.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreComponent,
    CambioLetrasPipe,
    SidebarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    CoreComponent,
    CambioLetrasPipe,
    SidebarComponent
  ]
})
export class CoreModule { }
