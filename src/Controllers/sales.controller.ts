import { Body, Controller, Delete, Get, Post, Put, Res } from "@nestjs/common"
import { Response } from "express"
import { SaleService } from "src/services/sales.service"
import dataSource from "src/db/data-source-cli"
import { Sale } from "src/Models/sales.model"
import { SaleDto } from "src/DTO/sales.dto"

@Controller('/sale')
export class SaleController {

    constructor(
        private readonly saleService: SaleService
    ) { }

    @Get(':id')
    public getOne(): any {
        return { data: "get one !!" }
    }

    @Get()
    public async getAll(@Res() response: Response) {
        const sale = await dataSource.getRepository(Sale).find()
        return response.status(200).json(sale);
    }

    @Post()
    public async create(@Res() response: Response, @Body() saleDTO: SaleDto) {
        const saleCreated = await this.saleService.create(saleDTO);
        return response.status(201).json(saleCreated)
    }

    @Put(':id')
    public update(): any {
        return { data: "Created !!" }
    }

    @Delete(':id')
    public delete(): any {
        return { data: "Removed !!" }
    }
}