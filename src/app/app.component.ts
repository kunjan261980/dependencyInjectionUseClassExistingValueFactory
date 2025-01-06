import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy.logger';
import { APP_INJECTION_CONFIG,  AppInjectionConfig } from './config.token';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:LoggerService , useFactory:(config: AppInjectionConfig)=>{
   return config.testInjectionEnable ? new LoggerService() : new ExperimentalLoggerService()}
     , deps:[APP_INJECTION_CONFIG]
    }]
})
export class AppComponent {
  title = 'angularTest';
  constructor(private logger: LoggerService)
  {
  this.logger.prefix = "app component"
  this.logger.log("App component Factory")
  //console.log(this.logger === this.explogger)
  }
}
