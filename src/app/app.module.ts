import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{ HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LivresComponent } from './livres/livres.component';
import { EtagereComponent } from './etagere/etagere.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { ListeAuteursComponent } from './liste-auteurs/liste-auteurs.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ListeEtagereComponent } from './liste-etagere/liste-etagere.component';
import { ModifLivresComponent } from './modif-livres/modif-livres.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifEtagereComponent } from './modif-etagere/modif-etagere.component';
import { ModifAuteursComponent } from './modif-auteurs/modif-auteurs.component';
import { DetailAuteursComponent } from './detail-auteurs/detail-auteurs.component';
import { DetailLivresComponent } from './detail-livres/detail-livres.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { DetailEtagereComponent } from './detail-etagere/detail-etagere.component';
import { HomeComponent } from './home/home.component';
import { LivresCategorieComponent } from './livres-categorie/livres-categorie.component';
import { LivresAuteurComponent } from './livres-auteur/livres-auteur.component';
import { LivresEtagereComponent } from './livres-etagere/livres-etagere.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ListeLivresUtilisateursComponent } from './liste-livres-utilisateurs/liste-livres-utilisateurs.component';
import { LivreParAuteurComponent } from './livre-par-auteur/livre-par-auteur.component';
import { ListeAuteursUtilisateursComponent } from './liste-auteurs-utilisateurs/liste-auteurs-utilisateurs.component';
import { ListeCategorieUtilisateursComponent } from './liste-categorie-utilisateurs/liste-categorie-utilisateurs.component';
import { LivreParCategorieComponent } from './livre-par-categorie/livre-par-categorie.component';
import { LivreParEtagereComponent } from './livre-par-etagere/livre-par-etagere.component';
import { ListeEtagereUtilisateurComponent } from './liste-etagere-utilisateur/liste-etagere-utilisateur.component';

// module angular material 4 lignes
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatTableModule} from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import{MatSortModule} from '@angular/material/sort';
import { TestTutoComponent } from './test-tuto/test-tuto.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivresComponent,
    EtagereComponent,
    CategorieComponent,
    AuteursComponent,
    ListeLivresComponent,
    ListeAuteursComponent,
    ListeCategorieComponent,
    ListeEtagereComponent,
    ModifLivresComponent,
    ModifCategorieComponent,
    ModifEtagereComponent,
    ModifAuteursComponent,
    DetailAuteursComponent,
    DetailLivresComponent,
    DetailCategorieComponent,
    DetailEtagereComponent,
    HomeComponent,
    LivresCategorieComponent,
    LivresAuteurComponent,
    LivresEtagereComponent,
    FooterComponent,
    ContactComponent,
    ListeLivresUtilisateursComponent,
    LivreParAuteurComponent,
    ListeAuteursUtilisateursComponent,
    ListeCategorieUtilisateursComponent,
    LivreParCategorieComponent,
    LivreParEtagereComponent,
    ListeEtagereUtilisateurComponent,
    TestTutoComponent,
    ConnexionComponent,
    UtilisateursComponent,
    ReservationComponent
    
  ],

  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
