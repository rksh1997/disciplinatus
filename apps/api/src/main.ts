import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  app.use(cors());
  const port = process.env.PORT || 7000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
