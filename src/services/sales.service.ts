import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SaleDto } from "src/DTO/sales.dto";
import { Sale } from "src/Models/sales.model";
import { Repository } from "typeorm";

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private readonly saleRepository: Repository<Sale>
        ) { }
        
        async findAll(): Promise<Sale[]> {
            const sales = await this.saleRepository.find();
        
        if (sales.length === 0) throw new HttpException('Sales not found!', HttpStatus.NOT_FOUND);

        return sales;
    }

    async create(saleDTO: any): Promise<SaleDto> {
        const saleCreated = await this.saleRepository.save(saleDTO);
        return saleCreated;
    }

}
