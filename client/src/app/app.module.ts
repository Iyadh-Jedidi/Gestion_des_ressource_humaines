import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionsModule } from './sections/sections.module';

import {ApiCompteService} from './services/compte/api-compte.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './services/auth-gaurd.service';
import {AuthentificationService} from './services/authentification.service';
import { FormationComponent } from './formation/formation.component';
import { EditFormationComponent } from './formation/edit-formation/edit-formation.component';
// import { DemandeFormationComponent } from './formation/demande-formation/demande-formation.component';
import { ComptesComponent } from './Admin/comptes/comptes.component';
import {CompteEditComponent} from './Admin/comptes/compte-edit/compte-edit.component';
import { OffreEditComponent } from './offres/offre-edit/offre-edit.component';
import { LoginComponent } from './login/login.component';
import {DatePipe} from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { RecrutementEditComponent } from './recrutement/recrutement-edit/recrutement-edit.component';


const routes: Routes = [
    {   path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent,

    },
    {
        path: 'responsable/recrutement',
        canActivate: [AuthGaurdService],
        component: RecrutementComponent

    },
    {
         path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'admin/comptes',
        component: ComptesComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'admin/offres',
        component: OffresComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'admin/offres/:id',
        component: OffreEditComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'offres',
        component: OffresComponent,
/*
        canActivate: [AuthGaurdService]
*/
    },

    {
        path: 'offres/:id',
        component: OffreEditComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'compte-add',
        component: CompteEditComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'offre-add',
        component: OffreEditComponent,
        canActivate: [AuthGaurdService]
    },
    
    {
        path: 'admin/comptes/:id',
        component: CompteEditComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'formation',
        component: FormationComponent,
        canActivate: [AuthGaurdService]
    },
   
    {
        path: 'formation/:id',
        component: EditFormationComponent,
        canActivate: [AuthGaurdService]
    },


    {
        path: 'responsable/formation/ajouter-formation',
        component: EditFormationComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'responsable/recrutement-edit/:id',
        component: RecrutementEditComponent,
        canActivate: [AuthGaurdService]
    }

];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SignupComponent,
    OffresComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    FormationComponent,
    EditFormationComponent,
    // DemandeFormationComponent,
      ComptesComponent,
      OffreEditComponent,
      CompteEditComponent,
      RecrutementComponent,
      RecrutementEditComponent  ],
  imports: [
      
      BrowserModule,
      NgbModule.forRoot(),
      FormsModule,
      RouterModule,
      HttpClientModule,
      SectionsModule,
      RouterModule.forRoot(routes),
      PdfViewerModule,

  ],
  providers: [ApiCompteService, CookieService, AuthentificationService , AuthGaurdService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

