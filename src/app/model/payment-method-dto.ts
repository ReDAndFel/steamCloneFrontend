import { TransactionDTO } from "./transaction-dto";

export class PaymentMethodDTO {
    id:number = 0;
    bankingEntity:string = "";
    cardNumber:string = "";
    titularName:string = "";
    expirationDate:Date = new Date();
    cvv:number = 0;
    state:boolean = false;
    idPerson:string = "";
    transactions:TransactionDTO[] = [];    
}
