import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path: 'Parfumerie',
        loadComponent: () => import('./Client/Features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'Dashbord',
        loadComponent:()=>import('./Admin/dashbord/dashbord.component').then(m=>m.DashbordComponent)
    },
    {
        path:'AjoutParfum',
        loadComponent:()=>import('./Admin/parfum-crud/ajout-parfum/ajout-parfum.component').then(m=>m.AjoutParfumComponent)
    },
    {
        path:'login',
        loadComponent:()=>import('./Auth/connexion/connexion.component').then(m=>m.ConnexionComponent)
    },
    {
        path:'signup',
        loadComponent:()=>import('./Auth/inscription/inscription.component').then(m=>m.InscriptionComponent)
    }
];
