import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ParfumCrudService } from '../../../Services/parfum-crud.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  data=this.parfum.parfums;

  constructor(private parfum: ParfumCrudService) {

  }
  ngOnInit() {
  }
  addCommande(){}

}
