import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerGeniuneService implements Logger {

  constructor() { }
  prefix: string = 'root LoggerGeniuneService';
  log(message: string): void{
    console.log(`${this.prefix}: ${message}`)
  }
}
