import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-modal',
  templateUrl: './confirmacion-modal.component.html',
  styleUrls: ['./confirmacion-modal.component.css']
})
export class ConfirmacionModalComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialog.closeAll();
      this.router.navigateByUrl('/home');
    }, 2000);

  }

}
