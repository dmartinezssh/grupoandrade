import { RouterModule, Routes } from "@angular/router";
import { ConversionesComponent } from "./conversiones.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: ConversionesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VersionesRouting { }

export const VERSIONES_COMPONENT = [
    ConversionesComponent
];