import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login'},
  { path: 'login', component: LoginComponent }
]


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
