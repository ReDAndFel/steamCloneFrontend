import { BusinessDTO } from "./business-dto";
import { ImageDTO } from "./image-dto";
import { TagDTO } from "./tag-dto";

export class GameDTO {
    id:number = 0;
    name:string = "";
    releaseDate:Date = new Date();
    realPrice:number = 0;
    price:number = 0;
    discount:number = 0;
    description:string = "";
    requeriments:string = "";
    clasification:string = "";
    puntuation:number = 0;
    businesses:BusinessDTO[] = [];
    tags:TagDTO[] = [];
    languages:string[] = [];
    images:ImageDTO[] = [];
    state:boolean = true;
}
