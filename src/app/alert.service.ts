import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

export type AlertColor = 'default' | 'primary' | 'secondary' | 'tertiary' | 'error';

export interface AlertConfig {
  message: string;
  color?: AlertColor;
  timeout?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  snackbar = inject(MatSnackBar)

  open(alert: AlertConfig) {
    const fullAlert: AlertConfig = {
      color: 'default', // Not a real CSS class
      timeout: 3000,
      ...alert
    }

    this.snackbar.open(fullAlert.message, 'X', {
      panelClass: fullAlert.color + '-snackbar',
      duration: fullAlert.timeout,
    });
  }
}
