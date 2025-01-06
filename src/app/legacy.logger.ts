import { Logger } from "./logger"

export const LegacyLogger: Logger= {
    prefix:  'Legacy root',
    log(message: string): void{
      console.log(`${this.prefix}: ${message}`)
    }
}