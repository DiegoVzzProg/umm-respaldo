import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './frontend/login/login.component';
import { UmmComponent } from './frontend/umm/umm.component';
import { HomeModule } from './frontend/components/home/home.module';

const pathPredetrminado = 'umm/'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'umm',
    component: UmmComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => { return HomeModule }
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
