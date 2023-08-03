import { TransactionDetailDTO } from "./transaction-detail-dto";

export class TransactionDTO {
    id:number = 0;
    totalPrice:number = 0;
    date:Date = new Date();
    transactionDetails:TransactionDetailDTO[] = [];
    idUser:number = 0;
    idPaymentMethodDTO:number = 0;
}
