import { Inject, InjectionToken } from "@angular/core"

export interface AppConfig{
    testEnable: boolean
}

export const APP_CONFIG =  new InjectionToken<AppConfig>('appconfig')