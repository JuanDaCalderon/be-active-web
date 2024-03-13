import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearEjercicioModalComponent } from 'src/app/crear-ejercicio-modal/crear-ejercicio-modal.component'


@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crear-ejercicio.component.html',
  styleUrl: './crear-ejercicio.component.scss'
})
export class CrearEjercicioComponent {
  constructor(private dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(CrearEjercicioModalComponent, {
      width: '460px',

    });
  }

  cerrarModal(): void {
    this.dialog.closeAll();
    }

}
