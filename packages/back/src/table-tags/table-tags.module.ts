import { Module } from '@nestjs/common';
import { TableTagsService } from './table-tags.service';
import { TableTagsController } from './table-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableTag } from './entities/table-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableTag])],
  controllers: [TableTagsController],
  providers: [TableTagsService]
})
export class TableTagsModule { }
