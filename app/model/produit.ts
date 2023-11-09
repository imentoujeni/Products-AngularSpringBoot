import { Categorie } from "./categorie";

export interface Produit {
    id:number;
    nom:string;
    prix:number;
    quantite:number;
    
    urlImg: string ;
    categorie :Categorie;

    //property binding
    //event binding
    //two way binding


}
