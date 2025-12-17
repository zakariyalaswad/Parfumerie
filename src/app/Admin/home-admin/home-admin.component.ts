import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from '../../Services/theme.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './home-admin.component.html'
})
export class HomeAdminComponent {
  constructor(protected theme:ThemeService){
    
  }

}
