import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html'
})
export class ConnexionComponent {
  constructor(private auth: AuthService, private router:Router) {

  }
  email: string = "";
  password: string = "";
  async login(email:string,password:string) {
    try {
      await this.auth.login(email, password);
      console.log("login avec succes");
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

}
