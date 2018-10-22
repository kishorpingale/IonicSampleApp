export class Product {
    name: string;
    size: number;
    photo: string;
    status: string;
    charges: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}