import { Injectable } from '@nestjs/common';
import { Alarm } from '../../domain/alarm';

@Injectable()
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract save(alarm: Alarm): Promise<Alarm>;
}
