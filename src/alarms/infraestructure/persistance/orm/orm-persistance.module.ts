import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAlarmRepository } from '../../../application/ports/create-alarm-repository';
import { FindAlarmsRepository } from 'src/alarms/application/ports/find-alarms-repository';
import { UpsertMaterializedAlarmRepository } from 'src/alarms/application/ports/upsert-materialized-alarm.repository';
import { AlarmEntity } from './entities/alarm.entity';
import { OrmCreateAlarmRepository } from './repositories/create-alarm.repository';
import { AlarmItemEntity } from './entities/alarm-item.entity';
import { OrmFindAlarmRepository } from './repositories/find-alarms.repository';
import { OrmUpsertMaterializedAlarmRepository } from './repositories/upsert-materialized-alarm.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MaterializedAlarmView,
  MaterializedAlarmViewSchema,
} from './schema/materialize-alarm-view.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlarmEntity, AlarmItemEntity]),
    MongooseModule.forFeature([
      { name: MaterializedAlarmView.name, schema: MaterializedAlarmViewSchema },
    ]),
  ],
  providers: [
    {
      provide: CreateAlarmRepository,
      useClass: OrmCreateAlarmRepository, // 💡 This is where we bind the port to an adapter
    },
    {
      provide: FindAlarmsRepository,
      useClass: OrmFindAlarmRepository, // 💡 This is where we bind the port to an adapter
    },
    {
      provide: UpsertMaterializedAlarmRepository,
      useClass: OrmUpsertMaterializedAlarmRepository, // 💡 This is where we bind the port to an adapter
    },
  ],
  exports: [
    CreateAlarmRepository,
    FindAlarmsRepository,
    UpsertMaterializedAlarmRepository,
  ],
})
export class OrmAlarmPersistenceModule {}
