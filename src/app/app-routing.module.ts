import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CrearPausaComponent } from './crear-pausa/crear-pausa.component';
import { CrearEjercicioComponent } from './crear-ejercicio/crear-ejercicio.component';



const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'crear-pausa', component:CrearPausaComponent},
  { path: 'crear-ejercicio', component:CrearEjercicioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
