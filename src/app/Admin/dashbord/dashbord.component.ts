import { Component, effect, OnInit, signal } from '@angular/core';
import { ParfumCrudService } from '../../Services/parfum-crud.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ThemeService } from '../../Services/theme.service';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html'
})
export class DashbordComponent implements OnInit {
  
  data = this.parfum.parfums;
  
  constructor(private parfum: ParfumCrudService, private route: Router,protected theme:ThemeService) {
  }
  
  ngOnInit(): void {
    
  }
  Supprimer(id: string) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      confirmButtonColor: '#D4AF37',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.parfum.delete(id);
        Swal.fire('Supprimé!', 'Le parfum a été supprimé.', 'success');
      }
    });
  }

  modifier(id: string) {
    this.route.navigate(['/admin/ajoutParfum'],{
      state:{id}
    })
  }
}
