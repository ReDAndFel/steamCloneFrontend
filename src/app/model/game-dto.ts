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

    constructor(id:number,name:string,releaseDate:Date,realPrice:number, price:number, discount:number, description:string, requeriments:string,
       clasification:string, puntuation:number,state:boolean){
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.realPrice = realPrice;
        this.price = price;
        this.discount = discount;
        this.description = description;
        this.requeriments = requeriments
        this.clasification = clasification;
        this.puntuation = puntuation;
        this.state = state;
    }
}
