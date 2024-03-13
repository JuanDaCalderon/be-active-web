import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule }  from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule}  from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CrearPausaComponent } from './crear-pausa/crear-pausa.component';
import { CrearEjercicioComponent } from './crear-ejercicio/crear-ejercicio.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmacionModalComponent } from './confirmacion-modal/confirmacion-modal.component';
import { CrearEjercicioModalComponent } from './crear-ejercicio-modal/crear-ejercicio-modal.component';

@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrearPausaComponent,
    CrearEjercicioComponent,
      ConfirmacionModalComponent,
      CrearEjercicioModalComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    MatSelectModule,
    MatDialogModule
  ],
  exports:[RouterModule, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
