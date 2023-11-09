import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modifier-p',
  templateUrl: './modifier-p.component.html',
  styleUrls: ['./modifier-p.component.css']
})
export class ModifierPComponent implements OnInit {
  produit!:Produit
  id!:number;
  constructor(private ar:ActivatedRoute ,private service:ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params.id
    this.service.getProductById(this.id).subscribe(data=>this.produit=data)
  }


  modifier()
  {this.service.updateProduct(this.id,this.produit).subscribe(()=>this.router.navigate(["/produits"]));

  }
}
