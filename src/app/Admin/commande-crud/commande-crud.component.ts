import { Component, OnInit } from '@angular/core';
import { CmdCrudService } from '../../Services/cmd-crud.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commande-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-crud.component.html',
  styleUrl: './commande-crud.component.css'
})
export class CommandeCrudComponent {

  data = this.cmd.cmds;

  constructor(private cmd: CmdCrudService) {

  }

  confirmer(data: any) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      confirmButtonColor: '#D4AF37',
      cancelButtonText: 'Annuler'
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          data.confirmer = true;
          await this.cmd.editCmd(data.idDoc, data);
          Swal.fire('Confirmer!', 'Le parfum a été confirmer.', 'success');
        }
      } catch (error) {
        Swal.fire('error!', "cette commande n'existe pas ", 'error');
      }
    });

  }
  supprimer(data: any) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      confirmButtonColor: '#D4AF37',
      cancelButtonText: 'Annuler'
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          console.log(data);
          await this.cmd.deleteCmd(data.idDoc);
          Swal.fire('Supprimé!', 'Le parfum a été supprimé.', 'success');
        }
      }
      catch (error) {
        Swal.fire('error!', "cette commande n'existe pas ", 'error');
      }
    });

  }

}
