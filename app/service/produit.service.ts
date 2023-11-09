import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  host="http://localhost:8281/rest"

  constructor(private client:HttpClient) { }


public getProducts():Observable<Produit[]>
{return this.client.get<Produit[]>(this.host+"/products");}


public getProductById(id:number):Observable<Produit>
{return this.client.get<Produit>(this.host+"/product/"+id);}

public delete(id:number):Observable<void>
{
  return this.client.delete<void>(this.host+"/products/"+id);
}

public addProduct(p:Produit):Observable<void>
{
  console.log("11111111111111111111111111111");
  return this.client.post<void>(this.host+"/products",p);
}
public updateProduct(id:number,p:Produit):Observable<void>
{
  return this.client.put<void>(this.host+"/products/"+id,p);
}

public getAllCategories():Observable<Categorie[]>
{
  return this.client.get<Categorie[]>(this.host+"/categories")
}

public getCatByNom(mc:String):Observable<Categorie>
{return this.client.get<Categorie>(this.host+"/categories/"+mc);}

}
