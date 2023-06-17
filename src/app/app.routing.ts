import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'auth', loadChildren: () => import('@gpo/auth').then(m => m.AuthModule)},
    { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [AuthGuard]},
    { path: 'conversiones', loadChildren: () => import('./pages/conversiones/conversiones.module').then(m => m.ConversionesModule), canActivate: [AuthGuard]},
    { path: 'calcula-fecha', loadChildren: () => import('@gpo/calcula-fecha').then(m => m.CalculaFechaModule), canActivate: [AuthGuard]},
    { path: 'formulario', loadChildren: () => import('@gpo/formulario').then(m => m.FormularioModule), canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})

export class AppRouting { }
