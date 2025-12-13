import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html'
})
export class ConnexionComponent {
  constructor(private auth: AuthService) {

  }


  email: string = "";
  password: string = "";
  async login(email:string,password:string) {
    try {
      await this.auth.login(email, password);
      console.log("login avec succes");
    } catch (error) {
      console.log(error);
    }
  }

}
