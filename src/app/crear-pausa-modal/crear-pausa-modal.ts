import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionModalComponent } from 'src/app/confirmacion-modal/confirmacion-modal.component'

@Component({
  selector: 'app-crear-pausa-modal',
  standalone: true,
  imports: [],
  templateUrl: './crear-pausa-modal.component.html',
  styleUrl: './crear-pausa-modal.component.html'
})
export class CrearPausaModalComponent {
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

