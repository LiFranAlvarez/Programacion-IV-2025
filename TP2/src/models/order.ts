import { ItemOrder } from "./item";
export type Status = 'pending' | 'confirmed' | 'delivered' | 'cancelled';

export class Order {
    protected status: Status = 'pending';
    constructor(
    protected idOrder: string,
    protected items: ItemOrder[],
    protected address: string,
    protected total: number,
    protected cancelReason?: string | undefined
    ){};
    public get getIdOrder() : string {
        return this.idOrder;
    };
    public get getStatus() : Status {
        return this.status;
    };
    public set setStatus(valor : Status) {
        this.status = valor;
    }
    public get  getCanselReason() : string | undefined{
        return this.cancelReason;
    }
    public set setCancelReason(reason : string) {
        this.cancelReason = reason;
    }
    public get getAddress() : string {
        return this.address;
    }
    public set setAddres(nuevaAddress : string) {
        this.address = nuevaAddress;
    }
    public get getItems() : ItemOrder[] {
        return this.items;
    }
}
