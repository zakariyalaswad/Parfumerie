import { Component, OnInit, signal } from '@angular/core';
import { ParfumCrudService } from '../../../Services/parfum-crud.service';
import { Parfum } from '../../../Interface/parfum';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-parfum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout-parfum.component.html'
})
export class AjoutParfumComponent implements OnInit {

  data=signal<Parfum>({
    id: "",
    nom: "",
    prix: null,
    promoPrix: null,
    url: "",
    type: "",
    Qte: null,
    volume: null,
    marque: ""

  })

  idDoc:string | null=null;

  constructor(private parfum: ParfumCrudService,private router:Router) {
  }
  async ngOnInit() {
    this.idDoc = history.state?.id ?? null;

    if (this.idDoc) {
      await this.loadParfum(this.idDoc);
    }
  }

  
  async loadParfum(id:string){
    if(!this.idDoc) return ;
      const snap=await this.parfum.getParfum(id);

    if (snap.exists()) {
      this.data.set({
        ...(snap.data() as Parfum),
        id: snap.id
      });
      }
  }
  async add() {
    try {
      await this.parfum.ajout(this.data());
      console.log("ajouter avec succe");
      this.reset();
      this.router.navigate(['/admin']);
      Swal.fire('Ajouter!', 'Le parfum a été ajouté', 'success');
    }
    catch (error) {
      console.log(error);
    }
  }
  modify(){
    if(this.idDoc)
    try{
      this.parfum.edit(this.idDoc,this.data());
      console.log('modifier avec succée');
      this.reset();
      this.idDoc=null;
      this.router.navigate(['/admin']);
      Swal.fire('Modifier!', 'Le parfum a été modifier.', 'success');
    }catch(error){
      console.log(error)
    }
  }

  reset() {
    this.data.set({
      id: "",
      nom: "",
      prix: null,
      promoPrix: null,
      url: "",
      type: "",
      Qte: null,
      volume: null,
      marque: ""

    })

  }

}
