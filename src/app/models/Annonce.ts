export interface Annonce
{
   id?: number,
  depart: string,
  etapes:Array<string>,
  arrivee:string,
  type: string,
  capacite:string,
  status:string,
  conducteurId:number
}

