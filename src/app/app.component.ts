import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy.logger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide: LoggerService , useValue: LegacyLogger}]
})
export class AppComponent {
  title = 'angularTest';
  constructor(private logger: LoggerService,private explogger: ExperimentalLoggerService)
  {
    //this.logger.prefix = "app component"
  this.logger.log("App Component Init")
   //console.log(this.logger === this.explogger)
  }
}
