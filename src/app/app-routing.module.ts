import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { EtagereComponent } from './etagere/etagere.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { HeaderComponent } from './header/header.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { ListeAuteursComponent } from './liste-auteurs/liste-auteurs.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ListeEtagereComponent } from './liste-etagere/liste-etagere.component';
import { ModifLivresComponent } from './modif-livres/modif-livres.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifEtagereComponent } from './modif-etagere/modif-etagere.component';
import { ModifAuteursComponent } from './modif-auteurs/modif-auteurs.component';
import { DetailAuteursComponent } from './detail-auteurs/detail-auteurs.component';
import { DetailEtagereComponent } from './detail-etagere/detail-etagere.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { DetailLivresComponent } from './detail-livres/detail-livres.component';
import { HomeComponent } from './home/home.component';
import { LivresCategorieComponent } from './livres-categorie/livres-categorie.component';
import { LivresAuteurComponent } from './livres-auteur/livres-auteur.component';



const routes: Routes = [
  {
    path :"livres",
    component: LivresComponent
   
  },
  {
    path :"auteurs",
    component: AuteursComponent
   
  },
  {
    path :"categorie",
    component: CategorieComponent
   
  },
 {
   path:"etagere",
   component:EtagereComponent
 },
 {
   path: "header",
   component:HeaderComponent
 },
 {
   path:"liste-livres",
   component:ListeLivresComponent
 },
 {
   path:"liste-auteurs",
   component:ListeAuteursComponent
 },
 {
  path:"liste-categorie",
  component:ListeCategorieComponent
},
{
  path:"liste-etagere",
  component:ListeEtagereComponent
},
{
  path:"modif-livres/:idLivre",
  component:ModifLivresComponent
},
{
  path:"modif-categorie/:idCategorie",
  component:ModifCategorieComponent
},
{
  path:"modif-etagere/:idEtagere",
  component:ModifEtagereComponent
},
{
  path:"modif-auteurs/:id",
  component:ModifAuteursComponent
},
{
  path:"detail-auteurs/:id",
  component:DetailAuteursComponent
},
{
  path:"detail-etagere/:idEtagere",
  component:DetailEtagereComponent
},
{
  path:"detail-categorie/:idCategorie",
  component:DetailCategorieComponent
},
{
  path:"detail-livres/:idLivre",
  component:DetailLivresComponent
},
{
  path:"home",
  component:HomeComponent
}
,
{
  path:"livres-categorie",
  component:LivresCategorieComponent
}
,
{
  path:"livres-auteur",
  component:LivresAuteurComponent
}
,
{
  path:"livres-etagere",
  component:HomeComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
