import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { CoffeesModule } from '../coffees/coffees.module';
import { CoffeeImagesModule } from '../coffee-images/coffee-images.module';
import { AuthModule } from '../auth/auth.module';
import { RolesModule } from '../roles/roles.module';
import { ReservationStatusModule } from '../reservation-status/reservation-status.module';
import { ReservationsModule } from '../reservations/reservations.module';
import { CaffeeTablesModule } from '../caffee-tables/caffee-tables.module';
import { CaffeeBuildingsModule } from '../caffee-buildings/caffee-buildings.module';
import { TableStatusModule } from '../table-status/table-status.module';
import { TableTagsModule } from '../table-tags/table-tags.module';
import { DevDataInitializerModule } from '../dev-data-initializer/dev-data-initializer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    CoffeesModule,
    CoffeeImagesModule,
    AuthModule,
    RolesModule,
    ReservationStatusModule,
    ReservationsModule,
    CaffeeTablesModule,
    CaffeeBuildingsModule,
    TableStatusModule,
    TableTagsModule,
    DevDataInitializerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
