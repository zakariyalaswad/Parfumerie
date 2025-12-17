import { Component, OnInit, signal } from '@angular/core';
import { ParfumCrudService } from '../../../Services/parfum-crud.service';
import { FooterComponent } from "../footer/footer.component";
import { CmdCrudService } from '../../../Services/cmd-crud.service';
import { Commande } from '../../../Interface/commande';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { NgIf } from "@angular/common";
import { ThemeService } from '../../../Services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, FormsModule, NgIf],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  data = this.parfum.parfums;

  searchTerm: string = '';
  filteredParfumData: any[] = [];


  constructor(private parfum: ParfumCrudService, private cmd: CmdCrudService, protected theme: ThemeService) {

  }
  ngOnInit() {
  }
  dataCmd: Commande = {
    id: 0,
    idParfum: "",
    idClient: "",
    nombre: 1,
    prix: 0,
    nomPrenom: "--",
    nomParfum: "--",
    marque: "",
    confirmer: false
  };
  addCommande(item: any) {
    try {
      this.dataCmd.marque = item.marque;
      this.dataCmd.nomParfum = item.nom;
      this.dataCmd.prix = item.promoPrix;
      this.dataCmd.idParfum = item.idDoc;
      Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: 'Cette Commande sera affecter',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        confirmButtonColor: '#D4AF37',
        cancelButtonText: 'Annuler'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.cmd.ajoutCmd(this.dataCmd);
          Swal.fire('Commande', 'La Commande bien affecter', 'success');
        }
      });
    } catch (error) {
      console.log(error)
    }


  }

  //filter


  filterParfum() {
    this.currentPage.set(1);

    if (!this.searchTerm.trim()) {
      this.data.update(() => this.parfum.parfums());
      return;
    }

    const term = this.searchTerm.toLowerCase();

    const filtered = this.parfum.parfums().filter((p: any) =>
      p.nom.toLowerCase().includes(term) ||
      p.marque.toLowerCase().includes(term)
    );

    this.data.update(() => filtered);
  }


  //pagination

  currentPage = signal(1);
  itemsPerPage = 6;

  paginatedData = () => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return this.data().slice(start, start + this.itemsPerPage);
  };


  totalPages = () => {
    return Math.ceil(this.data().length / this.itemsPerPage);
  };

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }




}
