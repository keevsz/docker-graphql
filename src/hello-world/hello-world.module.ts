import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
//Comment!!
@Module({
  providers: [ HelloWorldResolver ]
})
export class HelloWorldModule {}
