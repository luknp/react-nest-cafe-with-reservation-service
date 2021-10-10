import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CaffeeBuilding } from '../caffee-buildings/entities/caffee-building.entity';
import { TableStatus } from '../table-status/entities/table-status.entity';
import { TableTag } from '../table-tags/entities/table-tag.entity';
import { CreateCaffeeTableDto } from './dto/create-caffee-table.dto';
import { UpdateCaffeeTableDto } from './dto/update-caffee-table.dto';
import { CaffeeTable } from './entities/caffee-table.entity';

@Injectable()
export class CaffeeTablesService {
    constructor(
        @InjectRepository(CaffeeTable)
        private tableRepository: Repository<CaffeeTable>,
        private connection: Connection,
    ) { }

    async create(createCaffeeTableDto: CreateCaffeeTableDto) {
        const tagArray: TableTag[] = [];

        try {
            createCaffeeTableDto.tags.forEach(async (tag) => {
                const tagRepository = this.connection.getRepository(TableTag);
                let resultTag = await tagRepository.findOne(tag);

                if (resultTag === undefined) {
                    resultTag = await tagRepository.save(tag);
                }
                tagArray.push(resultTag);
            });
            await this.connection.transaction(async manager => {
                const tableInstance = this.tableRepository.create(createCaffeeTableDto);
                
                const tableRepo = manager.getRepository(CaffeeTable); 
                const building = (await manager.getRepository(CaffeeBuilding).find())[0];
                tableInstance.caffeeBuilding = building;
                const status = (await manager.getRepository(TableStatus).findOne({ name: tableInstance.tableStatus.name }));
                tableInstance.tableStatus = status;
                tableInstance.tags = tagArray;

                await tableRepo.save(tableInstance);
            });
        } catch (e) {
            console.log((e as Error).message);
        }
    }

    findAll() {
        return this.tableRepository.find();
    }

    findOne(id: number) {
        return this.tableRepository.findOne(id);
    }

    update(id: number, updateCaffeeTableDto: UpdateCaffeeTableDto) {
        return this.tableRepository.update({ id }, updateCaffeeTableDto);
    }

    remove(id: number) {
        return this.tableRepository.delete(id);
    }

    count() {
        return this.tableRepository.count();
    }
}
