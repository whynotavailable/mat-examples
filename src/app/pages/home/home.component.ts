import {Component, inject} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {NavItem, NavService} from "../../nav.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navService = inject(NavService)
}
