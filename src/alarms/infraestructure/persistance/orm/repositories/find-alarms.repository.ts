import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FindAlarmsRepository } from 'src/alarms/application/ports/find-alarms-repository';
import { MaterializedAlarmView } from '../schema/materialize-alarm-view.schema';
import { AlarmReadModel } from 'src/alarms/domain/read-models/alarm-read.model';
import { Model } from 'mongoose';

@Injectable()
export class OrmFindAlarmRepository implements FindAlarmsRepository {
  constructor(
    @InjectModel(MaterializedAlarmView.name)
    private readonly alarmModel: Model<MaterializedAlarmView>,
  ) {}

  async findAll(): Promise<AlarmReadModel[]> {
    return await this.alarmModel.find();
  }
}
