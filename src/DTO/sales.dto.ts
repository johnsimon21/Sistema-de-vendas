interface ProductData {
    product_id: string,
    quantity: number
}

export class SaleDto {
    readonly id?: string;
    readonly client_id: string;
    readonly products: ProductData[];
    readonly date?: string;
    readonly total: number;
}
