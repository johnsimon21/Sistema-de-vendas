import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientDto } from "src/DTO/client.dto";
import { Client } from "src/models/client.model";


@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private readonly ClientRepository: Repository<Client>
    ) { }

    async findAllClients(): Promise<Client[]> {
        const clients = await this.ClientRepository.find()

        if (clients.length === 0) throw new HttpException('Client not found!', HttpStatus.NOT_FOUND);

        return clients
    }

    async createClient(clientDTO: ClientDto): Promise<ClientDto> {
        const createClient = await this.ClientRepository.save(clientDTO)
        return createClient
    }
}