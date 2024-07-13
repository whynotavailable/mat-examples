import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NavService} from "../../nav.service";
import {MatListItem} from "@angular/material/list";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertColor, AlertService} from "../../alert.service";

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatListItem,
    MatButton
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  navService = inject(NavService)
  alertService = inject(AlertService)

  openAlert(color: AlertColor) {
    this.alertService.open({ message: color + ' button clicked', color });
  }
}
