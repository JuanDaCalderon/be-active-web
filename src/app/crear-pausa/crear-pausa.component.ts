import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPausaModalComponent } from 'src/app/crear-pausa-modal/crear-pausa-modal'

@Component({
  selector: 'app-crear-pausa',
  templateUrl: './crear-pausa.component.html',
  styleUrl: './crear-pausa.component.scss'
})
export class CrearPausaComponent {
  constructor(private dialog: MatDialog) {}

  abrirModal(): void {
    const dialogRef = this.dialog.open(CrearPausaModalComponent, {
      width: '460px',
    });
  }

  cerrarModal(): void {
    this.dialog.closeAll();
    }

}
