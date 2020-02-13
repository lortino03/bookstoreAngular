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
import { FooterComponent } from './footer/footer.component';
import { LivresEtagereComponent } from './livres-etagere/livres-etagere.component';
import { ContactComponent } from './contact/contact.component';
import { ListeLivresUtilisateursComponent } from './liste-livres-utilisateurs/liste-livres-utilisateurs.component';
import { ListeCategorieUtilisateursComponent } from './liste-categorie-utilisateurs/liste-categorie-utilisateurs.component';
import { ListeAuteursUtilisateursComponent } from './liste-auteurs-utilisateurs/liste-auteurs-utilisateurs.component';
import { ListeEtagereUtilisateurComponent } from './liste-etagere-utilisateur/liste-etagere-utilisateur.component';
import { LivreParAuteurComponent } from './livre-par-auteur/livre-par-auteur.component';
import { LivreParEtagereComponent } from './livre-par-etagere/livre-par-etagere.component';
import { LivreParCategorieComponent } from './livre-par-categorie/livre-par-categorie.component';
import { TestTutoComponent } from './test-tuto/test-tuto.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import{AuthGuardService} from './services/auth-guard.service'


const routes: Routes = [
  {
    path :"livres",
    component: LivresComponent,
    canActivate: [AuthGuardService]
   
  },
  {
    path :"auteurs",
    component: AuteursComponent,
    canActivate: [AuthGuardService]
   
  },
  {
    path :"categorie",
    component: CategorieComponent,
    canActivate: [AuthGuardService]
   
  },
 {
   path:"etagere",
   component:EtagereComponent,
   canActivate: [AuthGuardService]
 },
 {
   path: "header",
   component:HeaderComponent
 },
 {
   path:"liste-livres",
   component:ListeLivresComponent,
   canActivate: [AuthGuardService]
 },
 {
   path:"liste-auteurs",
   component:ListeAuteursComponent,
   canActivate: [AuthGuardService]
 },
 {
  path:"liste-categorie",
  component:ListeCategorieComponent,
  canActivate: [AuthGuardService]
},
{
  path:"liste-etagere",
  component:ListeEtagereComponent,
  canActivate: [AuthGuardService]
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
  path:"livres-categorie/:idCategorie",
  component:LivresCategorieComponent
}
,
{
  path:"livres-auteur/:idAuteurs",
  component:LivresAuteurComponent
}
,
{
  path:"livres-etagere/:idEtagere",
  component:LivresEtagereComponent
}
,
{
  path:"footer",
  component:FooterComponent
}
,
{
  path:"contact",
  component:ContactComponent,
  canActivate: [AuthGuardService]
},
{
  path:"liste-livres-utilisateurs",
  component:ListeLivresUtilisateursComponent,// la virgule et can activate  pour restreindre l'acces a cette route
  canActivate: [AuthGuardService]
}
,
{
  path:"liste-auteurs-utilisateurs",
  component:ListeAuteursUtilisateursComponent,
  canActivate: [AuthGuardService]
}
,
{
  path:"liste-categorie-utilisateurs",
  component:ListeCategorieUtilisateursComponent,
  canActivate: [AuthGuardService]
},
{
  path:"liste-etagere-utilisateur",
  component:ListeEtagereUtilisateurComponent,
  canActivate: [AuthGuardService]
},
{
  path:"livre-par-auteur",
  component:LivreParAuteurComponent,
  canActivate: [AuthGuardService]
},
{
path: "livre-par-etagere",
component:LivreParEtagereComponent,
canActivate: [AuthGuardService]
},
{
  path : "livre-par-categorie",
  component:LivreParCategorieComponent,
  canActivate: [AuthGuardService]
}
,
{
  path : "test-tuto",
  component:TestTutoComponent
}
,
{
  path : "connexion",
  component:ConnexionComponent
}
,
{
  path : "utilisateurs",
  component:UtilisateursComponent
}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
