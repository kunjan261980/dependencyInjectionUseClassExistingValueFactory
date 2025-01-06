import { Inject, InjectionToken } from "@angular/core"

export interface AppInjectionConfig{
    testInjectionEnable: boolean
}

export const APP_INJECTION_CONFIG =  new InjectionToken<AppInjectionConfig>('appAppInjectionConfig',{
    providedIn: "root",
    factory:()=>({testInjectionEnable: false})
})