import { Auteurs } from './Auteurs';
import { Categorie } from './Categorie';
import { Etagere } from './Etagere';

export class Livres{
    id_livre: number;
    code: number;
    date: Date;
    titre: String;
    Auteurs:Auteurs;
    Categorie: Categorie;
    Etagere: Etagere;


    
}