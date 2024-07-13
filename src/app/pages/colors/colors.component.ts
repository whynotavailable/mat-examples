import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavItem, NavService} from "../../nav.service";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [
    RouterLink,
    MatListItem
  ],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  navService = inject(NavService)
}
