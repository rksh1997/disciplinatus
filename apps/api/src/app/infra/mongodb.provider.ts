import { MongoClient } from 'mongodb';
import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DI_KEYS } from '../di';

export const mongoDBProvider: FactoryProvider = {
  provide: DI_KEYS.DB_CONNECTION,
  useFactory: async (configService: ConfigService) => {
    const dbUrl = configService.get('database.url');
    const dbName = configService.get('database.name');
    const client = new MongoClient(dbUrl);
    await client.connect();
    Logger.log(`Connected to database at: ${dbUrl}`, 'Database');
    return client.db(dbName);
  },
  inject: [ConfigService],
};
