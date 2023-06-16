import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: WelcomeComponent}
]

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class WelcomeModule { }