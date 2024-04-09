import { Module } from '@nestjs/common';
import { SharedInfrastructureModule } from './infreaestructure/share-infraestructure.module';
import { AggregateRehydrator } from './application/aggregate-rehydrator';

@Module({
  imports: [SharedInfrastructureModule],
  providers: [AggregateRehydrator],
  exports: [SharedInfrastructureModule, AggregateRehydrator],
})
export class SharedModule {}
