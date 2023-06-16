import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '@gpo/shared';

const routes: Routes = [
  { path: '', redirectTo: 'login'},
  { path: 'login', component: LoginComponent }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
  ]
})
export class AuthModule { }
