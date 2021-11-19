import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configFactory } from './config.factory';
import { InfrastructureModule } from './infra/infra.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configFactory],
    }),
    InfrastructureModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
