import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@gpo/shared";
import { TuNombreModal } from "./tuNombre.modal";
import { CoreModule } from "@gpo/core";


const routes: Routes = [
    { path: '', component: WelcomeComponent}
]

@NgModule({
    declarations: [
        WelcomeComponent,
        TuNombreModal
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CoreModule
    ],
    entryComponents: [
        TuNombreModal
    ]
})

export class WelcomeModule { }