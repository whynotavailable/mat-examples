import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ColorsComponent} from "./pages/colors/colors.component";
import {BasicComponent} from "./pages/basic/basic.component";
import {SideNavComponent} from "./pages/side-nav/side-nav.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: '**', redirectTo: '/home' }
];
