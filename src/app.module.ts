import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlarmsModule } from './alarms/application/alarms.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './shared/interfaces/application-bootstrap-options.interface';
import { AlarmsInfrastructureModule } from './alarms/infraestructure/persistance/alarm-infraestructure.module';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastucture(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}