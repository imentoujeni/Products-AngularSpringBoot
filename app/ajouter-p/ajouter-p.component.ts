import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajouter-p',
  templateUrl: './ajouter-p.component.html',
  styleUrls: ['./ajouter-p.component.css']
})
export class AjouterPComponent implements OnInit {


  
  constructor(private service:ProduitService, private router:Router) { }
c!:Categorie
  p:Produit={id:0,nom:"",prix:0,quantite:0,urlImg:"",categorie:{idcat:0,nom:""}};
  categories!:Categorie[];
  getAllCategories()
  {
    this.service.getAllCategories().subscribe(data=>this.categories=data)
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  onsubmit(f:NgForm): void{
  console.log(f.value);
  this.p.nom=f.value.nom;
  this.p.prix=f.value.prix;
  this.p.quantite=f.value.quantite;
  this.p.categorie.idcat=f.value.categorie;

  //console.log(f.value.categorie.id)
  //this.p.categorie.idcat=+f.value.categorie
  
  //console.log(this.p.categorie)
console.log(this.p);
    this.service.addProduct(this.p).subscribe(()=>this.router.navigate(["/produits"]));
    
  }

}
