import { Module } from '@nestjs/common';
import { SharedInfrastructureModule } from './infreaestructure/share-infraestructure.module';

@Module({
  imports: [SharedInfrastructureModule],
  exports: [SharedInfrastructureModule],
})
export class SharedModule {}
