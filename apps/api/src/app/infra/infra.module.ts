import { Global, Module } from '@nestjs/common';

import { mongoDBProvider } from './mongodb.provider';

@Global()
@Module({
  providers: [mongoDBProvider],
  exports: [mongoDBProvider],
})
export class InfrastructureModule {}
