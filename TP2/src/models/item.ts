type TamañoPizza = 'S' | 'M' | 'L';

export class ItemOrder {
    constructor(
        protected size: TamañoPizza,
        protected topping: string[]
    ){}
    public get getSize() : string {
        return this.size;
    }
    public get getTopping() : string[] {
        return this.topping;
    }
}
