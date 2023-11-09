import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  products !:Produit[]
  produit?:Produit
  id!:number
  constructor(private ar:ActivatedRoute, private route:Router,private service:ProduitService) { }

  ngOnInit(): void {
  
    
    this.service.getProducts().subscribe(data=>{this.products=data
    
    this.id=this.ar.snapshot.params.id;
    console.log(this.id)
    console.log("aaaaaaaaaaaaaa")
    this.service.getProductById(this.id).subscribe(data=>this.produit=data)
   console.log(this.produit?.nom) })
    
  }

  retour(){
this.route.navigate(['/produits']);
  }

}
