import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} 
from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterPComponent } from './ajouter-p/ajouter-p.component';
import { ModifierPComponent } from './modifier-p/modifier-p.component';

@NgModule({
  declarations: [
  
    AppComponent,
    ListeProduitComponent,
    AcceuilComponent,
    ProduitDetailComponent,
    PageNotFoundComponent,
    AjouterPComponent,
    ModifierPComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
