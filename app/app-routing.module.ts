import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterPComponent } from './ajouter-p/ajouter-p.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ModifierPComponent } from './modifier-p/modifier-p.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';

const routes: Routes = [
  {path:"produits",component:ListeProduitComponent},
  {path:"produits/:id",component:ListeProduitComponent},
  {path:"produit/:id",component:ProduitDetailComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"ajouter",component:AjouterPComponent},

  {path:"produitt/:id",component:ModifierPComponent},
  {path:"",redirectTo:"/acceuil",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
