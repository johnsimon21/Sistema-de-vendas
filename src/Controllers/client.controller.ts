import { Body, Controller, Delete, Get, Post, Put, Res } from "@nestjs/common"
import { Response } from 'express'
import { ClientService } from "src/services/client.service"
import { ClientDto } from '../DTO/client.dto';

@Controller('/client')
export class ClientController{
    constructor(
        private readonly clientService: ClientService
    ) { }

    @Post()
    async create(@Res() response: Response, @Body() clientDTO:ClientDto) {
        const clientCreated = await this.clientService.createClient(clientDTO)
        return response.status(200).json(clientCreated)
    }

    @Get(':id')
    public  findOne(): any{
        return { data: 'finOne'}       

    }

    @Get()
    async findAll(@Res() response: Response) {
        const clients = await this.clientService.findAllClients()

        return response.status(200).json(clients)
    }

    @Put(':id')
    public update(): any{
        return { data: 'update'}       

    }

    @Delete(':id')
    public delete(): any{
        return { data: 'delete'}       

    }
}