import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, SidenavComponent, MatSidenavModule, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
})
export class MainLayoutComponent {
  isSidenavCollapsed = false;

  toggleSidenav() {
    this.isSidenavCollapsed = !this.isSidenavCollapsed;
  }
}
