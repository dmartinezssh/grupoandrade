import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'auth', loadChildren: () => import('@gpo/auth').then(m => m.AuthModule)},
    { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
    { path: 'conversiones', loadChildren: () => import('./pages/conversiones/conversiones.module').then(m => m.ConversionesModule)},
    { path: 'calcula-fecha', loadChildren: () => import('@gpo/calcula-fecha').then(m => m.CalculaFechaModule)},
    { path: 'formulario', loadChildren: () => import('@gpo/formulario').then(m => m.FormularioModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})

export class AppRouting { }
