import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from "@angular/forms";
import { User } from '../../Interface/user';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent {

  userRef = collection(db, "User");

  constructor(private auth: AuthService) {
  }
  data: User = {
    id: "",
    nom: "",
    prenom: "",
    adresse: "",
    role: "Client",
    tel: null,
    email: "",
    password: "",
    passwordConfirm: ""
  };

  async register(data: User) {
    try {
      const userRec = await this.auth.signup(data.email, data.password);
      console.log("sign up avec succeé");

      data.id = userRec.user.uid;
      await addDoc(this.userRef, {
        ...data,
        createdAt: serverTimestamp()
      });               
      console.log("user ajouter avec succes!!");
      this.reset();
    } catch (error) { 
      console.log(error);
    }
  }
  reset(){
    this.data= {
      id: "",
      nom: "",
      prenom: "",
      adresse: "",
      role: "Client",
      tel: null,
      email: "",
      password: "",
      passwordConfirm: ""
    };

  }




}
