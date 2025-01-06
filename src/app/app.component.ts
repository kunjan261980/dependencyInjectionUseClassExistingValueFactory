import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy.logger';
import { APP_CONFIG, AppConfig } from './config.token';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide: APP_CONFIG , useValue: {testEnable: false}}]
})
export class AppComponent {
  title = 'angularTest';
  constructor(@Inject(APP_CONFIG) private config: AppConfig)
  {
    //this.logger.prefix = "app component"
  console.log(this.config.testEnable)
  //console.log(this.logger === this.explogger)
  }
}
