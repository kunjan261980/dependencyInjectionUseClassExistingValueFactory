import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide: LoggerService , useExisting: ExperimentalLoggerService}]
})
export class AppComponent {
  title = 'angularTest';
  constructor(private logger: LoggerService,private explogger: ExperimentalLoggerService)
  {
    this.logger.prefix = "app component"
  this.logger.log("App Component Init")
   console.log(this.logger === this.explogger)
  }
}
