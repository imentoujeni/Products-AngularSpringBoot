import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  products !:Produit[]
  productsF!:Produit[]
  id?:number
  produit?:Produit

  valeurB:string="masquer"

  constructor(private ar:ActivatedRoute, private service:ProduitService) {}

  ngOnInit(): void {
    
    this.getAllProd();
   
   /*  this.ar.paramMap.subscribe((x:Params)=>{
      this.id=+x.get('id');
      console.log(this.id)
       this.service.delete(this.id).subscribe(()=>this.getAllProd())
    }) */
  


   /*  this.ar.paramMap.subscribe((x:Params)=>{this.id=+x.get('id'); console.log(this.id);
  console.log("ppppppppppppp")
   this.produit=this.products.find(elt=>elt.id==this.id)
   console.log(this.produit?.nom) }) */
  }


  supp(id:number)
  {
      console.log(id);
       this.service.delete(id).subscribe(()=>this.getAllProd())
    
  }

  getAllProd()
  {
    this.service.getProducts().subscribe(data=>{this.products=data
      console.log(this.products)
      this.productsF=this.products;
      })
  }

  afficher(){
    if(this.valeurB=="masquer")
    this.valeurB="afficher"
    else
    this.valeurB="masquer"
  }
  getColor(x:number):string
  {
    if(x==0) return "red"
    return "black"
  }

  set texte(s:string)
  {
    this.productsF=this.filtrer(s);
  }

  filtrer(c:string)
  {
    return this.products.filter(e=>e.nom.indexOf(c)!=-1)
  }
}
