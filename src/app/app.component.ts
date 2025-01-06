import { Component, Inject, inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy.logger';
import { APP_INJECTION_CONFIG,  AppInjectionConfig } from './config.token';
import { LoggerGeniuneService } from './loggerGenuine.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:LoggerService , useFactory:(inject: Injector)=>{
   return inject.get(APP_INJECTION_CONFIG).testInjectionEnable   ? inject.get(LoggerGeniuneService) : inject.get(ExperimentalLoggerService)}
     , deps:[Injector]
    }]
})
export class AppComponent {
  title = 'angularTest';
  constructor(private logger: LoggerService)
  {
  //this.logger.prefix = "app component"
  this.logger.log("App component Factory")
  //console.log(this.logger === this.explogger)
  }
}
