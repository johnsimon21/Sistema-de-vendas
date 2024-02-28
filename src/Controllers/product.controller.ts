import { Body, Controller, Delete, Get, Post, Put, Res } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Response } from "express"
import { ProductDto } from "src/DTO/product.dto"
import { ProductService } from "src/services/product.service"
import dataSource from "src/db/data-source-cli"
import { Product } from "src/Models/product.model"
import { Repository } from "typeorm"

@Controller('/product')
export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    @Get(':id')
    public getOne(): any {
        return { data: "get one !!" }
    }

    @Post()
    public async create(@Res() response: Response, @Body() productDTO: ProductDto) {
        const productCreated = await this.productService.create(productDTO);
        return response.status(201).json(productCreated)
    }

    @Get()
    public async getAll(@Res() response: Response) {
        const products = await dataSource.getRepository(Product).find()
        return response.status(200).json(products);
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