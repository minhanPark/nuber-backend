import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'pserts1!o',
      database: 'nuber-eats',
      synchronize: true,
      logging: false,
    }),
    RestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
