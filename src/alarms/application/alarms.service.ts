import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { AlarmFactory } from '../domain/factories/alarm-factory';
import { AlarmRepository } from './ports/alarm-repository';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly alarmFactory: AlarmFactory,
  ) {}
  create(reateAlarmCommand: CreateAlarmCommand) {
    const alarm = this.alarmFactory.create(
      reateAlarmCommand.name,
      reateAlarmCommand.severity,
    );
    return this.alarmRepository.save(alarm);
  }

  findAll() {
    this.alarmRepository.findAll();
  }
}
