import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrearPausaComponent } from './crear-pausa/crear-pausa.component';
import { CrearEjercicioComponent } from './crear-ejercicio/crear-ejercicio.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pausa', component: CrearPausaComponent },
    { path: 'ejercicio', component: CrearEjercicioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
