import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionModalComponent } from 'src/app/confirmacion-modal/confirmacion-modal.component'

@Component({
  selector: 'app-crear-ejercicio-modal',
  templateUrl: './crear-ejercicio-modal.component.html',
  styleUrls: ['./crear-ejercicio-modal.component.css']
})
export class CrearEjercicioModalComponent  {
  constructor(private dialog: MatDialog, private router: Router) {}

  abrirModalConfirmacion(): void {
    this.dialog.closeAll()
    const dialogRef = this.dialog.open(ConfirmacionModalComponent, {
      width: '460px',

    });
  }

  cerrarModal(): void {
    this.dialog.closeAll()
  }


}
